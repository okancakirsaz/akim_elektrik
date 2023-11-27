import { useState } from "react";
import { AssetConsts } from "../../consts/asset_consts";
import "./bottom_bar.css";

function BottomBar(){
    const [] = useState();
    return <>
    <footer id="bottomBar">
        <ul id="bottomList">
            Akım Elektrik Kütahya
            <li>
                <a href="" className="bottomListElement">Gizlilik Politikası</a>
            </li>
        </ul>
       <img src={AssetConsts.instance.logo} alt="Recapu Logo" id="bottomLogo" />
    </footer>
    </>
}

export default BottomBar;