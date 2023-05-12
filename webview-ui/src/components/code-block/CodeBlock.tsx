import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.min.css";
import './CodeBlock.css'
// import "prismjs/themes/prism-solarizedlight.min.css";
interface CodeBlock {
    code: string
    language: string
    dark: boolean
  }
  
  export const CodeBlock: React.FC<CodeBlock> = ({ code, language, dark }) => {
    console.log({language});
    
    useEffect(() => {
      //   console.log('updated');
      //   await import(`prismjs/components/prism-${language}`);
      // Prism.highlightAll();
      console.log("test");
      
      async function highlight() {
        if (typeof window !== "undefined" || !language) {
          console.log({dark});
          
          //import the language dynamically using import statement
          console.time("test")
          // await import(`prismjs/components/prism-${language}`);
          console.timeEnd('test')
          // dark ? await import(`prismjs/themes/prism-tomorrow.min.css`) 
          //   : 
            // await import(`prismjs/themes/prism-solarizedlight.min.css`)
        
          Prism.highlightAll();
        }
      }
      highlight();
    }, [language,dark,code]);
    console.log({code});
    
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
  