
import PanelSupportMessage from '../../components/panel_support_message/panel_support_message';

function PanelSupportView(){
    return <>
    <h2 style={{width:"100%",textAlign:"center",backgroundColor:"#3e3e3e",padding:"10px",color:"white"}} >Teknik Destek Çağrıları</h2>
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
   id="panelSupportMessages">
     <PanelSupportMessage name='name' 
    contact='telefon numarası' 
    adress='asıjdsaojdğoasjdoğsajdasjdğjdpğsajdpajdğsajdğajdğsajdğsajdğapj' 
    problem='djaspjdpasojopasjopjsojdpasojdpoajaps' />
   </section>
    </>
}

export default PanelSupportView;

