import { LocalStorageEnums } from "../../../../core/enums/local_storage_enums";
import { PanelSettingsServices } from "../services/panel_settings_services";

export class PanelSettingsViewModel {
  service: PanelSettingsServices = new PanelSettingsServices();

  async initSettings() {
    const cachedSettings = sessionStorage.getItem(
      LocalStorageEnums.settings.toString()
    );

    if (cachedSettings == null) {
      const response: any = await this.service.getSettings();
      this.setValues(response);
      sessionStorage.setItem(LocalStorageEnums.settings.toString(),JSON.stringify(response));
    } else {
      this.setValues(JSON.parse(cachedSettings));
    }
  }

  private setValues(data: any) {
    const phoneNumber = document.getElementById(
      "adminPhoneNumber"
    ) as HTMLInputElement;
    const mailAdress = document.getElementById(
      "adminMailAdress"
    ) as HTMLInputElement;
    const password = document.getElementById(
      "panelPassword"
    ) as HTMLInputElement;

    phoneNumber.value=data[0]["phone_number"];
    mailAdress.value=data[0]["mail_adress"];
    password.value=data[0]["password"];
  }

  async updateSettings(){
    const phoneNumber = document.getElementById(
      "adminPhoneNumber"
    ) as HTMLInputElement;
    const mailAdress = document.getElementById(
      "adminMailAdress"
    ) as HTMLInputElement;
    const password = document.getElementById(
      "panelPassword"
    ) as HTMLInputElement;

    const request={
      "phone_number":phoneNumber.value,
      "mail_adress":mailAdress.value,
      "password":password.value
    }

    await this.service.updateSettings(request);
    sessionStorage.removeItem(LocalStorageEnums.settings.toString())
    //document.location.reload();
  }
}
