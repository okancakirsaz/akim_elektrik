import { useState } from "react";
import "./custom_button.css";

function CustomButton({text,onClick}:{text:string,onClick:any}){
    const [] = useState();

    return <>
    <button className="customButton" onClick={onClick}>{text}</button>
    </>
}

export default CustomButton;