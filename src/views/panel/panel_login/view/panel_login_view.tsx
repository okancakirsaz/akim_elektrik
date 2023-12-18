import "../styles/panel_login_style.css"
import TextInput from '../../../../core/widgets/text_input/text_input';
import CustomButton from "../../../../core/widgets/custom_button/custom_button";


function PanelLoginView(){
    return <>
    <div id="panelLoginContainer">
       <div id="panelLoginInputs">
       <TextInput controllerId="panelUserName" type="text" title="E-Posta"/>
       <div style={{height:10}}></div>
        <TextInput controllerId="panelPassword" type="password" title="Şifre"/>
        <div style={{height:10}}></div>
        <div
        style={{display:"flex", alignItems:"center", justifyContent:"center"}}
        ><CustomButton text="Giriş Yap" onClick={()=>{}}/></div>
       </div>
    </div>
    </>
}

export default PanelLoginView;

