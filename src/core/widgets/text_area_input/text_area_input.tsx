import { useState } from "react";
import "./text_area_input.css";

function TextAreaInput({title,controllerId,}:{title:string,controllerId:string}){
    const [] = useState();

    return <>
    <div className="textAreaInputTitle">{title}</div>
    <textarea id={controllerId} className="textAreaInput"/>
    </>
}

export default TextAreaInput;