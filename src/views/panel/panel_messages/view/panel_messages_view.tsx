import {useEffect} from "react";
import { PanelMessagesViewModel } from "../viewmodel/panel_messages_viewmodel";
import { LocalStorageEnums } from "../../../../core/enums/local_storage_enums";


function PanelMessagesView(){
    const viewModel:PanelMessagesViewModel =  PanelMessagesViewModel.instance;
    if(sessionStorage.getItem(LocalStorageEnums.token.toString())==null){
        window.location.href="/panel";
    }
    useEffect(()=>{
       const fetch = async ()=>{
        await viewModel.getMessages();
       }
       fetch();
    });
    return <>
    <h2 style={{width:"100%",textAlign:"center",backgroundColor:"#3e3e3e",padding:"10px",color:"white"}} >İletişim</h2>
   <section 
  
   id="panelMessages">
   </section>
    </>
}

export default PanelMessagesView;

