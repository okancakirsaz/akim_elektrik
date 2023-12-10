import PanelMessage from "../../components/panel_message/panel_message";


function PanelMessagesView(){
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
    <PanelMessage name="okan" contact="dasdsa" adress="asdas" problem="odıksa0ıdsaıdğpsaıdğpsaıdpğasıdpğısağp"/>
   </section>
    </>
}

export default PanelMessagesView;

