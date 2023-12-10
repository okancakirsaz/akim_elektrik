import { AssetConsts } from "../../../../../../core/consts/asset_consts";
import "./added_reference.css"


function AddedReference({name}:{name:string}){
    return <>
        <div className="addedReference">{name} <img id="deleteRef" src={AssetConsts.instance.remove}/></div>
    </>
}

export default AddedReference;