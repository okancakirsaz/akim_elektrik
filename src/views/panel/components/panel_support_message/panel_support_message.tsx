import { AssetConsts } from "../../../../core/consts/asset_consts";
import "./panel_support_message.css";

function PanelSupportMessage({name,contact,adress,problem}:{name:string,contact:string,adress:string,problem:string}){
return <>
<div id="panelMessage">
    <div id="name">Ad: {name}</div>
    <div id="phoneNum">Telefon Numarası: {contact}</div>
    <div id="adress">Adres: {adress}</div>
    <div id="problem">Sorun: {problem}</div>
    <img src={AssetConsts.instance.remove} alt="delete" id="deleteBtn"/>
</div>
</>
}

export default PanelSupportMessage;