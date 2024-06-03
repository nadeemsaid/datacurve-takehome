from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import subprocess
import sqlite3

app = FastAPI()

class CodeExecutionRequest(BaseModel):
    code: str

@app.post("/execute")
def execute_code(request: CodeExecutionRequest):
    try:
        result = subprocess.run(
            ["python3", "-c", request.code],
            capture_output=True,
            text=True,
            timeout=10
        )
        if result.returncode != 0:
            raise HTTPException(status_code=400, detail=result.stderr)
        return {"output": result.stdout}
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=400, detail="Code execution timed out")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/submit")
def submit_code(request: CodeExecutionRequest):
    output = execute_code(request)
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO submissions (code, output) VALUES (?, ?)", (request.code, output["output"]))
    conn.commit()
    conn.close()
    return {"message": "Code submitted successfully"}