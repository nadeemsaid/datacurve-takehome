import React from 'react';
import CodeEditor from '../components/CodeEditor';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Code Execution Website</h1>
      <CodeEditor />
    </div>
  );
};

export default Home;
