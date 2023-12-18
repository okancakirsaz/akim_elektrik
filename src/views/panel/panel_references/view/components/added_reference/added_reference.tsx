import { AssetConsts } from "../../../../../../core/consts/asset_consts";
import { PanelReferencesViewModel } from "../../../viewmodel/panel_references_viewmodel";
import "./added_reference.css"


function AddedReference({name}:{name:string}){
    const viewModel:PanelReferencesViewModel= PanelReferencesViewModel.instance;
    return <>
        <div className="addedReference">{name} <img id="deleteRef" src={AssetConsts.instance.remove} onClick={()=>viewModel.deleteReference(name)}/></div>
    </>
}

export default AddedReference;