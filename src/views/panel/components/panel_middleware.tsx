import { LocalStorageEnums } from "../../../core/enums/local_storage_enums";

function PanelMiddleware(){
    if(sessionStorage.getItem(LocalStorageEnums.token.toString())==null){
        window.location.href="/panel";
    }
    else{
        window.location.href="/admin-references";
    }
    return <></>
}
export default PanelMiddleware;