import { useEffect } from "react";
import PanelTabBar from "../../components/panel_tab_bar/panel_tab_bar";
import "../styles/panel_references_style.css";
import { PanelReferencesViewModel } from "../viewmodel/panel_references_viewmodel";
import { Link } from "react-router-dom";

function PanelReferencesView(){
    const viewModel:PanelReferencesViewModel= PanelReferencesViewModel.instance;
    useEffect(()=>{
        const asyncGap = (async()=>{
            await viewModel.fetchReferences();
        })

        asyncGap()
    })
    return <>
    <PanelTabBar />
    <div className="addReference"><Link className="addReference" to={"/admin-references/add-or-edit"}>Yeni Referans Ekle</Link></div>
    <div id="allReferences">
    
    </div>
    </>
}

export default PanelReferencesView;
