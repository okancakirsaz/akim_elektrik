import { useState } from "react";
import { AssetConsts } from "../../consts/asset_consts";
import "./bottom_bar.css";

function BottomBar(){
    const [] = useState();
    return <>
    <div id="bottomBar">
       <img src={AssetConsts.instance.recapu} alt="Recapu Logo" id="recapuLogo" />
    </div>
    </>
}

export default BottomBar;