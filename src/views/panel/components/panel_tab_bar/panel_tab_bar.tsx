import "./panel_tab_bar.css";

function PanelTabBar(){

    return <>
    <nav id="adminNavBar">
        <div id="panelNavBarTitle">Akım Elektrik - Admin Panel</div>
        <a className="adminNavBarLink" href="/admin-references">Referanslar</a>
        <a className="adminNavBarLink" href="/admin-support">Teknik Destek Çağrıları</a>
        <a className="adminNavBarLink" href="/admin-messages">İletişim</a>
        <a className="adminNavBarLink" href="/admin-settings">Ayarlar</a>    
    </nav>
    </>
}

export default PanelTabBar;

