import { useState } from "react";
import "./text_input.css";

function TextInput({title,controllerId,type,value}:{title:string,controllerId:string,type:string,value?:string}){
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event:any) => {
      setInputValue(event.target.value);
    };

    return <>
    <div className="textInputTitle">{title}</div>
    <input type={type} id={controllerId} className="textInput" value={inputValue} onChange={handleInputChange}/>
    </>
}

export default TextInput;