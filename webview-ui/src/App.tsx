import { vscode } from "./utilities/vscode";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";
import { useEffect, useState } from "react";
import CodeCard from "./components/code-card/CodeCard";


function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  }
  const [code, setCode] = useState('kj')

  useEffect(() => {
    // window.addEventListener('paste', async (event : any) => {
    //   event.preventDefault(); // Prevent the default paste behavior
    
    //   const clipboardData = event.clipboardData;
    //   if (clipboardData) {
    //     const text = await clipboardData.getData('text/plain');
    //     // Handle the pasted text here
    //     console.log('Pasted text:', text);
    //   }
    // });
    window.addEventListener('message', async event => {

      const message = event.data; // The JSON data our extension sent
      switch (message.type) {
        case "CODE":
          setCode(message.value)
          // document.execCommand('paste');
          break;
        default: console.log({message});
          break; 
      }
     
    });
  
   
  }, [])


  return (
   <CodeCard code={code}/>
  );
}

export default App;
