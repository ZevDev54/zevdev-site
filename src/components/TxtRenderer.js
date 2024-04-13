import React, { useState, useEffect } from 'react';

function TextFileReader({ filePath }) {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const readFile = () => {
      try {
        const content = require(`${filePath}`);
        setFileContent(content.default || content);
      } catch (error) {
        console.error('Error reading the file:', error);
      }
    };

    readFile();
  }, [filePath]);

  return (
    <div>
      <h1>File Content</h1>
      <p>{fileContent}</p>
    </div>
  );
}

export default TextFileReader;
