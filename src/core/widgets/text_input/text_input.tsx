import { useState } from "react";
import "./text_input.css";

function TextInput({title,controllerId,type}:{title:string,controllerId:string,type:string}){
    const [] = useState();

    return <>
    <div className="textInputTitle">{title}</div>
    <input type={type} id={controllerId} className="textInput" />
    </>
}

export default TextInput;