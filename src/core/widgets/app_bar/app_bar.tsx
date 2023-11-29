import { useEffect } from "react";
import "./app_bar.css";
import { AppBarViewModel } from "./app_bar_viewmodel";
import { AssetConsts } from "../../consts/asset_consts";
import LinkElement from "./link_element";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { SvgIcon } from "@mui/material";

function AppBar(){
    const viewModel:AppBarViewModel = new AppBarViewModel();
    useEffect(()=>{
        viewModel.init();
        viewModel.openMenu();
        viewModel.closeMenu()
        window.addEventListener('scroll', viewModel.onScroll);
    })
    return <>
    <nav id="appBar">
        <ul>
        <img src={AssetConsts.instance.logo} alt="logo" id="logo"/>
        <section id="actions">
        <li><a className="appBarLink" href="/">Ana Sayfa</a> </li>
        <li><a className="appBarLink" href="/iletisim">İletişim</a></li>
        <li><a className="appBarLink" href="">Referanslar</a></li>
        <li><a className="appBarLink" href="/hakkimizda">Hakkımızda</a></li>
        <li><a className="appBarLink" href="/servis-cagir">Acil Destek</a></li>
        <img  id="menu" src={AssetConsts.instance.menu} alt="menu" />
        </section>
        </ul>
        <div id="drawer">
        <LinkElement path="" text="Ana Sayfa"/>
        <LinkElement path="iletisim" text="İletişim"/>
        <LinkElement path="" text="Referanslar"/>
        <LinkElement path="hakkimizda" text="Hakkımızda"/>
        <LinkElement path="/servis-cagir" text="Acil Destek"/>
        <SvgIcon component={ArrowBackIos} id="pop"></SvgIcon>
    </div>
    </nav>
    <nav id="backupAppBar">
        <ul>
        <section id="actions">
        <li><a className="appBarLink" href="/">Ana Sayfa</a> </li>
        <li><a className="appBarLink" href="/iletisim">İletişim</a></li>
        <li><a className="appBarLink" href="">Referanslar</a></li>
        <li><a className="appBarLink" href="/hakkimizda">Hakkımızda</a></li>
        <li><a className="appBarLink" href="/servis-cagir">Acil Destek</a></li>
        <img  id="menu" src={AssetConsts.instance.menu} alt="menu" />
        </section>
        </ul>
    </nav>
    </>
}

export default AppBar;