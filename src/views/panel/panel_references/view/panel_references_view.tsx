import PanelTabBar from "../../components/panel_tab_bar/panel_tab_bar";
import ReferenceElement from "./components/reference_element/reference_element";
import "../styles/panel_references_style.css";
import { PanelReferencesViewModel } from "../viewmodel/panel_references_viewmodel";
import { Link } from "react-router-dom";

function PanelReferencesView(){
    const viewModel:PanelReferencesViewModel= PanelReferencesViewModel.instance;
    return <>
    <PanelTabBar />
    <div className="addReference"><Link className="addReference" to={"/admin-references/add-or-edit"}>Yeni Referans Ekle</Link></div>
    <div id="allRefences">
    <ReferenceElement 
    title="example title" 
    image="https://i.pinimg.com/564x/6b/e5/84/6be5845e3c3c9f7a11f41d7c57cbbc23.jpg" 
    description="example description" 
    references={["example company","example company","example company","example company"]} 
    />
    <ReferenceElement 
    title="example title" 
    image="https://i.pinimg.com/564x/6b/e5/84/6be5845e3c3c9f7a11f41d7c57cbbc23.jpg" 
    description="example description" 
    references={["example company","example company"]} 
    />
    </div>
    </>
}

export default PanelReferencesView;
