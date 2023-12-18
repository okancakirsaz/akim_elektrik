import ReactDOM from "react-dom";
import { PanelReferenceServices } from "../services/panel_references_service";
import AddedReference from "../view/components/added_reference/added_reference";

export class PanelReferencesViewModel {
  static instance: PanelReferencesViewModel = new PanelReferencesViewModel();
  service: PanelReferenceServices = new PanelReferenceServices();

  pickedImage?: File;
  addedReferencesList: string[] = [];

  openFileSelector() {
    document.getElementById("fileInput")!.click();
    document
      .getElementById("fileInput")!
      .addEventListener("change", (e: Event) => {
        this.pickedImage = (e.target as HTMLInputElement).files![0];
        this.displayPickedImage();
      });
  }
  displayPickedImage() {
    const imgContainer = document.getElementById(
      "addedImageInRefs"
    )! as HTMLImageElement;
    imgContainer.src = URL.createObjectURL(this.pickedImage!);
  }

  fetchAddedReferences() {
    let asJsx: any[] = [];
    this.addedReferencesList.forEach((ref) => {
      asJsx.push(<AddedReference name={ref} />);
    });
    const List = () => {
      return <div>
        {asJsx}
      </div>;
    };
    ReactDOM.render(<List/>,document.getElementById("addedReferences"))
  }

  addReference() {
    const titleInput = document.getElementById(
      "referenceName"
    )! as HTMLInputElement;
    this.addedReferencesList.push(titleInput.value);
    this.fetchAddedReferences();
  }

  deleteReference(name:string){
    this.addedReferencesList= this.addedReferencesList.filter(item=>item!==name);
    this.fetchAddedReferences();
  }

  async saveReference(){
  try {
    const title = document.getElementById("referenceTitle")! as HTMLInputElement;
    const desc = document.getElementById("referenceDescription")! as HTMLInputElement;
    const request = {
        "imgPaths":this.pickedImage!,
        "references":this.addedReferencesList,
        "title": title.value,
        "description":desc.value
    }

    if(this.validation(request)){
    await this.service.postReferenceData(request);
    document.location.reload();
    }
    else{
        alert("Eksik bilgi girdiniz. Tekrar deneyiniz.");
    }
  } catch (error) {
    alert("Bir sorun oluştu, tekrar deneyiniz.");
    console.log(error);
  }
  }

  validation(data:any){
    if(data["imgPaths"]==null||data["title"]==""||data["description"]==""){
        return false;
    }
    else{
        return true;
    }
  }
}
