import "../styles/contact_us_style.css"
import "../../../core/consts/style_consts.css";
import AppBar from "../../../core/widgets/app_bar/app_bar";
import BottomBar from "../../../core/widgets/bottom_bar/bottom_bar";
import TextInput from "../../../core/widgets/text_input/text_input";
import TextAreaInput from "../../../core/widgets/text_area_input/text_area_input";
import CustomButton from "../../../core/widgets/custom_button/custom_button";
import { AssetConsts } from "../../../core/consts/asset_consts";

function ContactUsView(){
    return <>
    <AppBar/>
    <div id="contactUsMain">
    <section id="contactUsDescription">
    <h2 id="contactUsDescriptionTitle">What Is Lorem Ipsum?</h2>
    <div id="contactUsDescriptionContent">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </div>
    <div className="contactInfo">
    <img className="contactInfoIcon" src={AssetConsts.instance.phone}/>
    <div className="contactInfoContent">Example Phone Number</div>
    </div>
    <div id="location">Location here</div>
    </section>
    <section id="contactUsInMain">
        <h3 id="contactUsTitle">Bize Ulaşın</h3>
        <div id="inputs">
            <TextInput title="Adınız-Soyadınız" controllerId="nameInput" type="text"/>
            <div className="sizedBox"></div>
            <TextInput title="Telefon Numaranız" controllerId="phoneNumberInput" type="number"/>
            <div className="sizedBox"></div>
            <TextInput title="E-Mail Adresiniz" controllerId="eMailInput" type="text"/>
            <div className="sizedBox"></div>
            <TextAreaInput title="Size Nasıl Yardımcı Olabiliriz?" controllerId="descriptionInput"/>
            <div className="sizedBox"></div>
            <div id="buttonArea"><CustomButton text="Gönder" onClick={()=>{}}/></div>
        </div>
    </section>
    </div>

    <BottomBar />
    </>
}

export default ContactUsView;

