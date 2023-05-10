import { vscode } from "./utilities/vscode";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  }
  const [code, setCode] = useState('kj')

  useEffect(() => {
    window.addEventListener('message', async event => {

      const message = event.data; // The JSON data our extension sent
      switch (message.type) {
        case "CODE":
          setCode(message.value)
          break;
        default: console.log({message});
          break; 
      }
      
      // // const text = await navigator.clipboard.readText();
     
      // document.execCommand('paste');

    });

   
  }, [])


  return (
    <main>
      <h1>Hello World!</h1>
      <VSCodeButton onClick={handleHowdyClick}>Howdy!</VSCodeButton>
      <button onClick={handleHowdyClick}>test</button>
      <div>{code}</div>
    </main>
  );
}

export default App;
