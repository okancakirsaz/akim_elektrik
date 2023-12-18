import { useEffect } from 'react';
import { PanelSupportViewModel } from '../viewmodel/panel_support_viewmodel';

function PanelSupportView(){
  const viewModel:PanelSupportViewModel = PanelSupportViewModel.instance;
  useEffect(()=>{
    const fetch = async ()=>{
     await viewModel.getMessages();
    }
    fetch();
 });
    return <>
    <h2 style={{width:"100%",textAlign:"center",backgroundColor:"#3e3e3e",padding:"10px",color:"white"}} >Teknik Destek Çağrıları</h2>
   <section 

   id="panelSupportMessages">
   </section>
    </>
}

export default PanelSupportView;

