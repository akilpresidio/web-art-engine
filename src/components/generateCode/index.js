import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import "./index.css";

const GenerateCode = ({ message }) => {
  const htmlText = `${message}`;
  return (
    <div className="generate-code-card">
      <header className="code-header">Generated Code :</header>
      <div className="generated-code">
        {htmlText === "" ? null : (
          <CopyBlock
            text={htmlText}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
        )}
      </div>
    </div>
  );
};

export default GenerateCode;
