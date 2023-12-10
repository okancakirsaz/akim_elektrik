import { AssetConsts } from "../../../../core/consts/asset_consts";
import "./panel_message.css";

function PanelMessage({name,contact,adress,problem}:{name:string,contact:string,adress:string,problem:string}){
return <>
<div id="panelMessage">
    <div id="nameMessage">Ad: {name}</div>
    <div id="phoneNumMessage">Telefon Numarası: {contact}</div>
    <div id="mailAdress">Adres: {adress}</div>
    <div id="problemMessage">Sorun: {problem}</div>
    <img src={AssetConsts.instance.remove} alt="delete" id="deleteBtn"/>
</div>
</>
}

export default PanelMessage;