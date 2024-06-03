
# Nadeem Code Execution Website

This project is a web-based code execution environment where users can write and run Python 3 code. It features a frontend built with React, TypeScript, and Tailwind CSS, and a backend powered by FastAPI. The executed code is stored in an SQLite database.

## Project Structure

```
/code-execution-website
  ├── /frontend
  │   ├── /src
  │   │   ├── components
  │   │   │   └── CodeEditor.tsx
  │   │   ├── pages
  │   │   │   └── Home.tsx
  │   │   ├── styles
  │   │   │   └── index.css
  │   │   ├── App.tsx
  │   │   └── main.tsx
  │   ├── index.html
  │   ├── package.json
  │   └── vite.config.ts
  ├── /backend
  │   ├── /app
  │   │   ├── main.py
  │   │   ├── models.py
  │   │   ├── routes.py
  │   │   └── services.py
  │   ├── requirements.txt
  │   └── database.db
  ├── /database
  │   └── schema.sql
  └── README.md
```

## Frontend Setup

1. **Navigate to the frontend directory:**

   ```sh
   cd frontend
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

## Backend Setup

1. **Navigate to the backend directory:**

   ```sh
   cd backend
   ```

2. **Create and activate a virtual environment:**

   ```sh
   python3 -m venv venv
   source venv/bin/activate  # Windows --> `venv\Scriptsctivate`
   ```

3. **Install the dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

4. **Apply the database schema:**

   ```sh
   sqlite3 database.db < schema.sql
   ```

5. **Run the FastAPI server:**

   ```sh
   uvicorn app.main:app --reload
   ```

## Usage

1. **Open your browser and navigate to `http://localhost:3000` to access the frontend.**
2. **Write Python code in the editor and click "Test Code" to see the output.**
3. **Click "Submit Code" to validate and store the code and output in the database.**

## File Details

### Frontend

- **CodeEditor.tsx**

  This component integrates Monaco Editor for code editing and includes functions to test and submit code by making API calls to the backend.

- **Home.tsx**

  This is the main page that contains the CodeEditor component and displays the heading for the application.

### Backend

- **main.py**

  Contains the FastAPI application setup with endpoints to execute and submit code.

- **schema.sql**

  SQL schema file to create the `submissions` table in the SQLite database.
