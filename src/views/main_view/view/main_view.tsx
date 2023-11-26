import "../styles/main_style.css"
import "../../../core/consts/style_consts.css";
import AppBar from "../../../core/widgets/app_bar/app_bar";
import TextInput from '../../../core/widgets/text_input/text_input';
import TextAreaInput from '../../../core/widgets/text_area_input/text_area_input';
import CustomButton from '../../../core/widgets/custom_button/custom_button';
import BottomBar from "../../../core/widgets/bottom_bar/bottom_bar";

function MainView(){
    return <>
    <AppBar/>
    <section id="ourMission">
        <div id="ourMissionText">
            <div id="titleArea">
                What Is Lorem Ipsum?
            </div>
            <div id="textArea">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    </section>
    <section id="aboutUs">
    <div className="showroomContainer" id="i1">
        <div className="showroomTitle">
            What Is Lorem Ipsum?
        </div>
        <div className="showroomDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
    </div>
    <div className="showroomContainer" id="i2">
        <div className="showroomTitle">
            What Is Lorem Ipsum?
        </div>
        <div className="showroomDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
    </div>
    <div className="showroomContainer" id="i3">
        <div className="showroomTitle">
            What Is Lorem Ipsum?
        </div>
        <div className="showroomDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
    </div>
    <div className="showroomContainer" id="i4">
        <div className="showroomTitle">
            What Is Lorem Ipsum?
        </div>
        <div className="showroomDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
    </div>
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

    <BottomBar />
    </>
}

export default MainView;

