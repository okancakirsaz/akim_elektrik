import { PanelMessagesServices } from "../services/panel_messages_services";

export class PanelMessagesViewModel {
  service: PanelMessagesServices = new PanelMessagesServices();
  elements?: any[];
  async getMessages() {
    const response = await this.service.getMessages();
    const container = document.getElementById("panelMessages")!;
    const elements = this.fetchMessagesAsElement(response);

    elements.forEach((element) => {
      container.appendChild(element);
    });
  }

  fetchMessagesAsElement(data: any) {
    let elements: any[] = [];
    for (let i = 0; i <= data.length - 1; i++) {
       // elements.push(this.elementDom(data[i]))
    }
    return elements;
  }


}
