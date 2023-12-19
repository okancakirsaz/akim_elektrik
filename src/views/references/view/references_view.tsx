import "../styles/references_style.css"
import AppBar from "../../../core/widgets/app_bar/app_bar";
import BottomBar from "../../../core/widgets/bottom_bar/bottom_bar";
import { ReferencesViewModel } from "../viewmodel/references_viewmodel";
import { useEffect } from "react";

function ReferencesView(){
    const viewModel:ReferencesViewModel= ReferencesViewModel.instance;
    useEffect(()=>{
        const asyncGap = (async()=>{
            await viewModel.fetchReferences();
        })

        asyncGap()
    })
    return <>
    <AppBar/>
    <section id="allReferences">
    <h2
    style={{
        height:"600px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    }}
    >Henüz referans bulunmamakta.</h2>
    </section>
    <BottomBar />
    </>
}

export default ReferencesView;

