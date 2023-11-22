import { useState } from "react";
import "./download_button.css";

function DownloadButton({text,onClick,iconPath}:{text:string,onClick:any,iconPath:string}){
    const [] = useState();

    return <>
    <button className="downloadButton" onClick={onClick}> 
    <img src={iconPath} alt="store-icon" id="storeIcon" /> 
    <div id="storeName">{text}</div>
    </button>
    </>
}

export default DownloadButton;