import CustomButton from "../../../../core/widgets/custom_button/custom_button";
import TextInput from "../../../../core/widgets/text_input/text_input";


function PanelSettingsView(){
    return <>
   <div style={{width:"250px", marginLeft:"auto",marginRight:"auto",backgroundColor:"#3e3e3e", padding:"15px",marginTop:"40px",borderRadius:"15px"}}>
   <TextInput title="Admin Telefon Numarası" controllerId="adminPhoneNumber" type="number"/>
    <CustomButton  onClick={()=>{}} text="Onayla"/>
    <div className="sizedBox"></div>
    <TextInput title="Admin Mail Adresi" controllerId="adminMailAdress" type="text"/>
    <CustomButton  onClick={()=>{}} text="Onayla"/>
    <div className="sizedBox"></div>
    <TextInput title="Panel Şifresi" controllerId="panelPassword" type="text"/>
    <CustomButton  onClick={()=>{}} text="Onayla"/>
   </div>
    </>
}

export default PanelSettingsView;

