import { LocalStorageEnums } from "../../../../core/enums/local_storage_enums";
import { PanelSettingsServices } from "../../panel_settings/services/panel_settings_services";
import { PanelLoginServices } from "../services/panel_login_services";
import { v4 as uuidv4 } from "uuid";

export class PanelLoginViewModel {
  service: PanelLoginServices = new PanelLoginServices();

  async signIn() {
    const passwordController = document.getElementById(
      "panelPassword"
    )! as HTMLInputElement;
    const mailController = document.getElementById(
      "panelUserName"
    )! as HTMLInputElement;
    try {
      //ALERT: Dependency injection
      const response = await new PanelSettingsServices().getSettings();
      if (
        response![0]["mail_adress"] == mailController.value &&
        response![0]["password"] == passwordController.value
      ) {
        sessionStorage.setItem(LocalStorageEnums.token.toString(), uuidv4());
        this.navigateToPanel();
      }
      else{
        alert("E-posta veya şifre yanlış tekrar deneyiniz.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  navigateToPanel() {
    window.location.href = "/panelmw";
  }
}
