
export class AppBarViewModel{
    private drawer:HTMLElement | null = null;
    private links:HTMLCollectionOf<Element>| null=null;
    init(){
        this.links=document.getElementsByClassName("appBarLinkDrawer");
        this.drawer= document.getElementById("drawer")!;
    }
    openMenu(){ 
        document.getElementById("menu")!.addEventListener("click",()=>{
            this.drawer!.style.display="flex";
            for(let i=0;i<=this.links!.length-1;i++){
                const link = this.links![i] as HTMLElement;
                link.style.display="flex";
                this.changeLinksDisplay("flex");
            }
        });
    }
    closeMenu(){
        document.getElementById("pop")!.addEventListener("click",()=>{
                this.drawer!.style.display="none";
               this.changeLinksDisplay("none");
        });
    }

    changeLinksDisplay(status:string){
        for(let i=0;i<=this.links!.length-1;i++){
            const link = this.links![i] as HTMLElement;
            link.style.display=status;
        }
    }
} 