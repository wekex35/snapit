import { useRef } from "react";
import { CodeBlock } from "../code-block/CodeBlock";
import './CodeCard.css';
import html2canvas from "html2canvas";
import StaticMenu from "../menu/StaticMenu";
interface CodeCard {
    code: string
}

const CodeCard: React.FC<CodeCard> = ({ code }) => {
    const codeRef = useRef(null);

    const handleScreenshot = () => {
        if (codeRef.current) {
            html2canvas(codeRef.current).then((canvas) => {
                const screenshot = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = 'screenshot.png';
                link.href = screenshot;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            });
        }
    };

    return (
        <div className="">
            <StaticMenu/>
            <button className="screen-shot" onClick={handleScreenshot}>Take Screenshot</button>
            <div className="space">
                <div className="card-parent" ref={codeRef}>
                    <div className="window">
                        <div id="navbar">
                            <div className="window-controls">
                                <div className="red dot"></div>
                                <div className="yellow dot"></div>
                                <div className="green dot"></div>
                            </div>
                            <div className="window-title"></div>
                        </div>
                        <CodeBlock code={code} language={"javascript"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeCard;