import { AssetConsts } from "../../../../core/consts/asset_consts";
import { PanelMessagesViewModel } from "../../panel_messages/viewmodel/panel_messages_viewmodel";
import "./panel_message.css";

function PanelMessage({
  name,
  contact,
  adress,
  problem,
}: {
  name: string;
  contact: string;
  adress: string;
  problem: string;
}) {
  const viewModel: PanelMessagesViewModel = PanelMessagesViewModel.instance;

  return (
    <>
      <div id="panelMessage">
        <div id="nameMessage">Ad: {name}</div>
        <div id="phoneNumMessage">Telefon Numarası: {contact}</div>
        <div id="mailAdress">Adres: {adress}</div>
        <div id="problemMessage">Sorun: {problem}</div>
        <img
          src={AssetConsts.instance.remove}
          alt="delete"
          id="deleteBtn"
          onClick={async () => await viewModel.deleteMessage(name + contact)}
        />
      </div>
    </>
  );
}

export default PanelMessage;
