import { useEffect, useRef } from "react";
import { CodeBlock } from "../code-block/CodeBlock";
import './CodeCard.css';
import StaticMenu from "../menu/StaticMenu";
import useMenuStore from "../stores/useMenuStore";
import domtoimage from 'dom-to-image';
import { vscode } from "../../utilities/vscode";
interface CodeCard {
    code: string
}

const CodeCard: React.FC<CodeCard> = ({ code }) => {
    const codeRef = useRef(null);

    const [
        darkMode,
        padding,
        selectedLanguage,
        selectedGradident,
        selectedTheme
    ] = useMenuStore(
        (state) => [
           
            state.darkMode,
            state.padding,
            state.selectedLanguage,
            state.selectedGradident,
            state.selectedTheme,

        ],
        
    )

    useEffect(() => {
        // Dynamically load the selected theme CSS file
    //     const themeLink = document.createElement("link");
    //     themeLink.rel = "stylesheet";
    //     themeLink.href = `prismjs/themes/${selectedTheme}.css`; // Replace with your theme file path
    //     document.head.appendChild(themeLink);
    // console.log(themeLink);
    
    //     // Cleanup function to remove the previous theme CSS
    //     return () => {
    //       document.head.removeChild(themeLink);
    //     };
      }, [selectedTheme]);


    const handleScreenshot = async () => {
        if (codeRef.current) {
            // html2canvas(codeRef.current).then((canvas) => {
            //     const screenshot = canvas.toDataURL('image/png');
            //     const link = document.createElement('a');
            //     link.download = 'screenshot.png';
            //     link.href = screenshot;
            //     document.body.appendChild(link);
            //     link.click();
            //     document.body.removeChild(link);

            // });
       
            const url = await domtoimage.toPng(codeRef.current);
            const data = url.slice(url.indexOf(',') + 1);
           
            // if (config.shutterAction === 'copy') {
            //   const binary = atob(data);
            //   const array = new Uint8Array(binary.length);
            //   for (let i = 0; i < binary.length; i++) array[i] = binary.charCodeAt(i);
            //   const blob = new Blob([array], { type: 'image/png' });
            //   navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            //   cameraFlashAnimation();
            // } else {
              vscode.postMessage({ type: 'SAVE',value: data });
            // }
        }
    };
console.log({darkMode});

    return (
        <div className="">
            <StaticMenu onShutterClick={handleScreenshot}/>
            <div className="space">
                <div className="card-parent" style={{padding, backgroundImage: selectedGradident}}  ref={codeRef}>
                    <div className="window" style={{background: darkMode ? "rgba(0,0,0,.75)" : "rgba(255, 255, 255, 0.75)"  }}>
                        <div id="navbar">
                            <div className="window-controls">
                                <div className="red dot"></div>
                                <div className="yellow dot"></div>
                                <div className="green dot"></div>
                            </div>
                            <div className="window-title"></div>
                        </div>
                        <CodeBlock code={code} language={selectedLanguage} dark={darkMode}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeCard;