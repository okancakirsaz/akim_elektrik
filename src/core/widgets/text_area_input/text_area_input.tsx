import { useState } from "react";
import "./text_area_input.css";

function TextAreaInput({title,controllerId,value}:{title:string,controllerId:string,value?:string}){
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event:any) => {
      setInputValue(event.target.value);
    };

    return <>
    <div className="textAreaInputTitle">{title}</div>
    <textarea id={controllerId} className="textAreaInput" value={inputValue} onChange={handleInputChange}/>
    </>
}

export default TextAreaInput;