import "./custom_text_button.css";



function CustomTextButton({text,onClick}:{text:string,onClick:any}){
    return <>
   <button id="customTextButton" onClick={onClick}>{text}</button>
    </>
}

export default CustomTextButton;