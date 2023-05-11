import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import './CodeBlock.css'

interface CodeBlock {
    code: string
    language: string
  }
  
  export const CodeBlock: React.FC<CodeBlock> = ({ code, language }) => {
    useEffect(() => {
        console.log('updated');
      Prism.highlightAll();
    }, [code,language]);
    return (
      <>
       <pre >
        <code children={code} className={`language-${language}`} />
      </pre>
      </>
    );
  };
  