import ReactDOM from "react-dom";
import { PanelMessagesServices } from "../services/panel_messages_services";
import PanelMessage from "../../components/panel_message/panel_message";

export class PanelMessagesViewModel {
  static instance:PanelMessagesViewModel = new PanelMessagesViewModel();
  service: PanelMessagesServices = new PanelMessagesServices();
  async getMessages() {
    const response = await this.service.getMessages();
    this.fetchMessagesAsElement(response);
  }

  fetchMessagesAsElement(data: any) {
    const items: any[] = [];
    for (let i = 0; i <= data.length - 1; i++) {
      items.push(
        <PanelMessage
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

    ReactDOM.render(<List />, document.getElementById("panelMessages"));
  }

  async deleteMessage(data:string){
    await this.service.deleteMessage(data);
    await this.getMessages();
  }
}
