import { useEffect } from "react";
import "./app_bar.css";
//import { AppBarViewModel } from "./app_bar_viewmodel";
import { AssetConsts } from "../../consts/asset_consts";

function AppBar(){
    //const viewModel:AppBarViewModel = new AppBarViewModel();
    useEffect(()=>{})
    return <>
    <nav id="appBar">
        <ul>
        <img src={AssetConsts.instance.logo} alt="logo" id="logo"/>
        <section id="actions">
        <li><a className="appBarLink" href="">Ana Sayfa</a> </li>
        <li><a className="appBarLink" href="">İletişim</a></li>
        <li><a className="appBarLink" href="">Referanslar</a></li>
        <li><a className="appBarLink" href="">Acil Destek</a></li>
        </section>
        </ul>
    </nav>
    </>
}

export default AppBar;