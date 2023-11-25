import "../styles/main_style.css"
import "../../../core/consts/style_consts.css";
import AppBar from "../../../core/widgets/app_bar/app_bar";
import { AssetConsts } from "../../../core/consts/asset_consts";

function MainView(){
    return <>
    <AppBar/>
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

    <section id="ourMission">

    </section>
    </>
}

export default MainView;