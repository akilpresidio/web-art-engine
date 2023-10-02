import React from "react";

import "./index.css";

const GenerateCode = ({ message }) => {
  const htmlText = `${message}`;
  return (
    <div className="generate-code-card">
      <header className="code-header">Generated Code :</header>
      <div className="generated-code">{htmlText}</div>
    </div>
  );
};

export default GenerateCode;
