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
    // code = `// program to check if the number is even or odd
    // // take input from the user
    // const number = prompt("Enter a number: ");
    
    // //check if the number is even
    // if(number % 2 == 0) {
    //     console.log("The number is even.");
    // }
    
    // // if the number is odd
    // else {
    //     console.log("The number is odd.");
    // }`
    return (
      <>
       <pre >
        <code children={code} className={`language-${language}`} />
      </pre>
      </>
    );
  };
  