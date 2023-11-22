import { useState } from "react";
import "./custom_dropdown.css";

function CustomDropdown({options,controllerId,}:{options:any,controllerId:string}){
    const [] = useState();

    return <>
    <select className="customDropDown" id={controllerId}>
    {options}
    </select>
    </>
}

export default CustomDropdown;