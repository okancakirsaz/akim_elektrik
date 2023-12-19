import ReactDOM from "react-dom";
import { PanelReferenceServices } from "../services/panel_references_service";
import AddedReference from "../view/components/added_reference/added_reference";
import ReferenceElement from "../view/components/reference_element/reference_element";
import { createRoot } from "react-dom/client";
import { v4 as uuidv4 } from 'uuid';

export class PanelReferencesViewModel {
  static instance: PanelReferencesViewModel = new PanelReferencesViewModel();
  service: PanelReferenceServices = new PanelReferenceServices();
  pickedImage?: File;
  addedReferencesList: string[] = [];
  editableData?:any;

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
      return <div>{asJsx}</div>;
    };
    ReactDOM.render(<List />, document.getElementById("addedReferences"));
  }

  addReference() {
    const titleInput = document.getElementById(
      "referenceName"
    )! as HTMLInputElement;
    this.addedReferencesList.push(titleInput.value);
    this.fetchAddedReferences();
  }

  deleteReference(name: string) {
    this.addedReferencesList = this.addedReferencesList.filter(
      (item) => item !== name
    );
    this.fetchAddedReferences();
  }

  async saveReference() {
   const title = document.getElementById(
      "referenceTitle"
    )! as HTMLInputElement;
    const desc = document.getElementById(
      "referenceDescription"
    )! as HTMLInputElement;
    try {
      
      const request = {
        imgPaths: this.pickedImage!,
        references: this.addedReferencesList,
        title: title.value,
        description: desc.value,
        id:uuidv4()
      };

      if (this.validation(request)) {
        await this.service.postReferenceData(request);
        document.location.reload();
      } else {
        alert("Eksik bilgi girdiniz. Tekrar deneyiniz.");
      }
    } catch (error) {
      alert("Bir sorun oluştu, tekrar deneyiniz.");
      console.log(error);
    }
  }

  validation(data: any) {
    if (
      data["imgPaths"] == null ||
      data["title"] == "" ||
      data["description"] == ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  async fetchReferences() {
    const response = await this.service.getReferences();
    let elementList: any[] = [];

    for (let i = 0; i <= response!.length - 1; i++) {
      elementList.push(
        <ReferenceElement
          title={response![i]["title"]}
          image={response![i]["imgPaths"]}
          description={response![i]["description"]}
          references={response![i]["references"].join(", ")}
          referencesList={response![i]["references"]}
          id={response![i]["id"]}
        />
      );
    }

    const List = () => {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 320px))",
            gridGap: "15px",
          }}
        >
          {elementList}
        </div>
      );
    };
    ReactDOM.render(<List/>, document.getElementById("allReferences"));
  }
  
  async removeRefCard(id:string){
    await this.service.deleteReference(id);
    this.fetchReferences();
  }

  getInputValues(cameValue:any){
    const imgContainer = document.getElementById(
      "addedImageInRefs"
    )! as HTMLImageElement;
    const title = document.getElementById(
      "referenceTitle"
    )! as HTMLInputElement;
    const desc = document.getElementById(
      "referenceDescription"
    )! as HTMLInputElement;

    imgContainer.src=cameValue["imgPaths"];
    title.value=cameValue["title"];
    desc.value=cameValue["description"];
    this.addedReferencesList=cameValue["references"]
  }

  fetchComedReferences(references?:string[]){
    if(references!=null){
      let asJsx: any[] = [];
      references.forEach((ref) => {
        asJsx.push(<AddedReference name={ref} />);
      });
      this.addedReferencesList=references;
      const List = () => {
        return <div>{asJsx}</div>;
      };
      createRoot((document.getElementById("addedReferences") as Element)).render(<List/>);
    }
  }

  async updateReference(docId:string){
    const title = document.getElementById(
      "referenceTitle"
    )! as HTMLInputElement;
    const desc = document.getElementById(
      "referenceDescription"
    )! as HTMLInputElement;
    const imgContainer = document.getElementById(
      "addedImageInRefs"
    )! as HTMLImageElement;
    await this.setNewValues({
      "imgPaths":this.pickedImage!=null?this.pickedImage:imgContainer.src,
      "description":desc.value,
      "references":this.addedReferencesList,
      "title":title.value,
      "id":docId
    });
  }

   private async setNewValues(data:any){
    await this.service.updateReference(data,data["id"]);
    document.location.reload();
   }
  
}
