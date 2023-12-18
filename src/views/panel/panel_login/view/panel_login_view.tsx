import "../styles/panel_login_style.css"
import TextInput from '../../../../core/widgets/text_input/text_input';
import CustomButton from "../../../../core/widgets/custom_button/custom_button";
import { useEffect } from "react";
import { PanelLoginViewModel } from "../viewmodel/panel_login_viewmodel";


function PanelLoginView(){
    const viewModel:PanelLoginViewModel = new PanelLoginViewModel();
    useEffect(()=>{});
    return <>
    <div id="panelLoginContainer">
       <div id="panelLoginInputs">
       <TextInput controllerId="panelUserName" type="text" title="E-Posta"/>
       <div style={{height:10}}></div>
        <TextInput controllerId="panelPassword" type="password" title="Şifre"/>
        <div style={{height:10}}></div>
        <div
        style={{display:"flex", alignItems:"center", justifyContent:"center"}}
        ><CustomButton text="Giriş Yap" onClick={async()=>await viewModel.signIn()}/></div>
       </div>
    </div>
    </>
}

export default PanelLoginView;

