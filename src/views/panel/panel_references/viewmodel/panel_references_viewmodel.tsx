import { PanelReferenceServices } from "../services/panel_references_service";
import AddedReference from "../view/components/added_reference/added_reference";

export class PanelReferencesViewModel{
    static instance:PanelReferencesViewModel = new PanelReferencesViewModel(); 
    service:PanelReferenceServices=new PanelReferenceServices();

    pickedImage?:File;
    addedReferencesList:string[]=[];
    addedReferencesAsJsx:any[]=[];

    openFileSelector(){
        document.getElementById("fileInput")!.click();
        document.getElementById('fileInput')!.addEventListener('change', (e:Event)=>{
            this.pickedImage= (e.target as HTMLInputElement).files![0];  
            this.displayPickedImage();
        });
    }
   displayPickedImage(){
    const imgContainer = document.getElementById("addedImageInRefs")! as HTMLImageElement;
    imgContainer.src= URL.createObjectURL(this.pickedImage!);
   }

   fetchAddedReferences(){
    for(const ref in this.addedReferencesList){
        //TODO:Continue here
     this.addedReferencesAsJsx.push(<AddedReference name={ref}/>);
    }
   }

   addReference(){
    const titleInput= document.getElementById("referenceName")! as HTMLInputElement;
    this.addedReferencesList.push(titleInput.value);
    this.fetchAddedReferences();
   }
}