import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AssetConsts } from "../../consts/asset_consts";
import "./app_bar.css";
import { AppBarViewModel } from "./app_bar_viewmodel";
import LinkElement from "./link_element";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { SvgIcon } from "@mui/material";

function AppBar(){
    const viewModel:AppBarViewModel = new AppBarViewModel();
    useEffect(()=>{
        viewModel.init();
        viewModel.openMenu();
        viewModel.closeMenu()
    })
    return <>
    <div id="appBar">
        <Link to="/"><img id="logo" src={AssetConsts.instance.logo} alt="logo"/></Link>
        <div id="bar">
            <LinkElement path="login" text="Giriş Yap/Kayıt Ol"/>
            <LinkElement path="about-us" text="Hakkımızda"/>
            <LinkElement path="contact" text="İletişim"/>
            <LinkElement path="order/select-type" text="Hızlı Sipariş Ver"/>
            <img src={AssetConsts.instance.menu} id="menu"/>
        </div>
    </div>
    <div id="drawer">
    <LinkElement path="login" text="Giriş Yap/Kayıt Ol"/>
    <LinkElement path="about-us" text="Hakkımızda"/>
    <LinkElement path="contact" text="İletişim"/>
    <LinkElement path="order/select-type" text="Hızlı Sipariş Ver"/>
    <SvgIcon component={ArrowBackIos} id="pop"></SvgIcon>
    </div>
   
    </>
}

export default AppBar;