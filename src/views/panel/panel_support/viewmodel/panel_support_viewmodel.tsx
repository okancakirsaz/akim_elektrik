import ReactDOM from "react-dom";
import PanelSupportMessage from "../../components/panel_support_message/panel_support_message";
import { PanelSupportServices } from "../services/panel_support_services";

export class PanelSupportViewModel{
    static instance:PanelSupportViewModel= new PanelSupportViewModel();
    service:PanelSupportServices = new PanelSupportServices();
    async getMessages() {
        const response = await this.service.getMessages();
        this.fetchMessagesAsElement(response);
      }
    
      fetchMessagesAsElement(data: any) {
        const items: any[] = [];
        for (let i = 0; i <= data.length - 1; i++) {
          items.push(
            <PanelSupportMessage
              name={data[i]["name"]}
              adress={data[i]["adress"]}
              contact={data[i]["phone_number"]}
              problem={data[i]["problem"]}
            />
          );
        }
    
        //Making grid view for parsing
        const List = () => {
          return <div
          style={
            {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 320px))",
            gridGap: "15px",
            padding:"10px",
            width: "calc(100% - 20px)",
           }
        }
          >{items}</div>;
        };
    
        ReactDOM.render(<List />, document.getElementById("panelSupportMessages"));
      }
    
      async deleteMessage(data:string){
        await this.service.deleteMessage(data);
        await this.getMessages();
      }
}