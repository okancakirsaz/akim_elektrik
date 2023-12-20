import { useEffect } from "react";
import CustomButton from "../../../../core/widgets/custom_button/custom_button";
import TextInput from "../../../../core/widgets/text_input/text_input";
import { PanelSettingsViewModel } from "../viewmodel/panel_settings_viewmodel";
import { LocalStorageEnums } from "../../../../core/enums/local_storage_enums";


function PanelSettingsView(){
    const viewModel:PanelSettingsViewModel=new PanelSettingsViewModel();
    if(sessionStorage.getItem(LocalStorageEnums.token.toString())==null){
        window.location.href="/panel";
    }
    useEffect(()=>{
        
        const asyncGap = (async()=>{
            viewModel.initSettings();
        });
        asyncGap();
    });
    return <>
   <div style={{width:"250px", marginLeft:"auto",marginRight:"auto",backgroundColor:"#3e3e3e", padding:"15px",marginTop:"40px",borderRadius:"15px"}}>
   <TextInput title="Admin Telefon Numarası" controllerId="adminPhoneNumber" type="number"/>
    <CustomButton  onClick={async()=>await viewModel.updateSettings()} text="Onayla"/>
    <div className="sizedBox"></div>
    <TextInput title="Admin Mail Adresi" controllerId="adminMailAdress" type="text"/>
    <CustomButton  onClick={async()=>await viewModel.updateSettings()} text="Onayla"/>
    <div className="sizedBox"></div>
    <TextInput title="Panel Şifresi" controllerId="panelPassword" type="text"/>
    <CustomButton  onClick={async()=>await viewModel.updateSettings()} text="Onayla"/>
   </div>
    </>
}

export default PanelSettingsView;

