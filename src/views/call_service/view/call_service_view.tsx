import "../styles/call_service_style.css"
import "../../../core/consts/style_consts.css";
import AppBar from "../../../core/widgets/app_bar/app_bar";
import BottomBar from "../../../core/widgets/bottom_bar/bottom_bar";
import { AssetConsts } from "../../../core/consts/asset_consts";
import TextInput from "../../../core/widgets/text_input/text_input";
import TextAreaInput from "../../../core/widgets/text_area_input/text_area_input";
import CustomButton from "../../../core/widgets/custom_button/custom_button";


function CallServiceView(){
    return <>
    <AppBar/>
    <section id="callServiceMain">
    <div className="callServiceText">Bizi arayabilir</div>
    <div className="contactInfo">
    <img className="contactInfoIcon" src={AssetConsts.instance.phone}/>
    <div className="contactInfoContent">Example Phone Number</div>
    </div>
    <div className="callServiceText">veya</div>
    <div id="inputsCallService">
            <TextInput title="Adınız-Soyadınız" controllerId="nameInput" type="text"/>
            <div className="sizedBox"></div>
            <TextInput title="Telefon Numaranız" controllerId="phoneNumberInput" type="number"/>
            <div className="sizedBox"></div>
            <TextAreaInput title="Adres bilgisi" controllerId="adressInput"/>
            <div className="sizedBox"></div>
            <TextAreaInput title="Sorununuzu kısaca özetler misiniz?" controllerId="problemInput"/>
            <div className="sizedBox"></div>
            <div id="buttonArea"><CustomButton text="Gönder" onClick={()=>{}}/></div>
        </div>
        <div className="sizedBox"></div>
        <div className="callServiceText">Formu doldurarak acil teknik destek talebinde bulunabilirsiniz.</div>
    </section>
    <BottomBar />
    </>
}

export default CallServiceView;

