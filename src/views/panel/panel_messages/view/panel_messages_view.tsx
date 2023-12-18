import {useEffect} from "react";
import { PanelMessagesViewModel } from "../viewmodel/panel_messages_viewmodel";


function PanelMessagesView(){
    const viewModel:PanelMessagesViewModel = new PanelMessagesViewModel();
    useEffect(()=>{
       const fetch = async ()=>{
        await viewModel.getMessages();
       }
       fetch();
    });
    return <>
    <h2 style={{width:"100%",textAlign:"center",backgroundColor:"#3e3e3e",padding:"10px",color:"white"}} >İletişim</h2>
   <section 
   style={
    {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 320px))",
    gridGap: "15px",
    padding:"10px",
    width: "calc(100% - 20px)",
   }
}
   id="panelMessages">
   </section>
    </>
}

export default PanelMessagesView;

