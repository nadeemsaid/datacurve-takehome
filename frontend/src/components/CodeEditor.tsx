import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleTestCode = async () => {
    try {
      const response = await fetch('http://localhost:8000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const result = await response.json();
      alert(`Output: ${result.output}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSubmitCode = async () => {
    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <MonacoEditor
        height="50vh"
        language="python"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
      />
      <button onClick={handleTestCode} className="btn">
        Test Code
      </button>
      <button onClick={handleSubmitCode} className="btn">
        Submit Code
      </button>
    </div>
  );
};

export default CodeEditor;