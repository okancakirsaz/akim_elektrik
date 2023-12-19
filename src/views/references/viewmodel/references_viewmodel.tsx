import { ReferencesService } from "../service/references_service";
import RefForClient from "../view/components/ref_for_client";
import RefName from "../view/components/ref_name";
import { createRoot } from "react-dom/client";

export class ReferencesViewModel {
  static instance: ReferencesViewModel = new ReferencesViewModel();
  service: ReferencesService = new ReferencesService();
  refList: any[] = [];
  async fetchReferences() {
    const response = await this.service.getReferences();
    if(response!=null){
      let elementList: any[] = [];
    for (let i = 0; i <= response!.length - 1; i++) {
      elementList.push(
        <RefForClient
          title={response![i]["title"]}
          image={response![i]["imgPaths"]}
          description={response![i]["description"]}
        />
      );
      this.refList.push({
        "refs": response![i]["references"],
        "title": response![i]["title"],
      });
    }

    if(response.length!=0){
      const List = () => {
        return <div>{elementList}</div>;
      };
      createRoot(document.getElementById("allReferences") as Element).render(<List/>)
    }
    }

  }

  fetchRefs(title: string) {
    let refs;
    let elementList: any[] = [];
    for (let a = 0; a <= this.refList.length - 1; a++) {
      if (title == this.refList[a]["title"]) {
        refs=this.refList[a]["refs"];
      }
    }

    for(let i =0;i<=refs!.length-1;i++){
      elementList.push(<RefName name={refs![i]}/>);

    }
    return elementList;
  }
}
