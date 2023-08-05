import React, { useState } from 'react';
import axios from 'axios';

const CodeConverter = () => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('js'); // Default language is JavaScript

  const handleConvert = async () => {
    try {
      const response = await axios.post('https://rich-gold-codfish-shoe.cyclic.app/codeGenerator', {
        code: inputCode,
        language: selectedLanguage,
      });
      setOutputCode(response.data.output);
    } catch (error) {
      console.error('Error converting code:', error);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="js">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
        <textarea
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="Enter your code here"
        />
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div className="right-side">
        <textarea
          value={outputCode}
          onChange={() => {}}
          placeholder="Converted code will be shown here"
        />
      </div>
    </div>
  );
};

export default CodeConverter;
