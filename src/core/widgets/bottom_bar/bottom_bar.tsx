import { useState } from "react";
import { AssetConsts } from "../../consts/asset_consts";
import "./bottom_bar.css";

function BottomBar(){
    const [] = useState();
    return <>
    <footer id="bottomBar">
       <img src={AssetConsts.instance.logo} alt="Recapu Logo" id="bottomLogo" />
    </footer>
    </>
}

export default BottomBar;