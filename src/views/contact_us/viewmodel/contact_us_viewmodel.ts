import { ContactUsService } from "../service/contact_us_service";
import { PanelSettingsServices } from '../../panel/panel_settings/services/panel_settings_services';
import { LocalStorageEnums } from "../../../core/enums/local_storage_enums";

export class ContactUsViewModel {
  service: ContactUsService = new ContactUsService();
  request?: any;

  async sendMessage() {
    try {
      this.getInputValues();
      await this.service.postMessage(this.request);
      this.resetInputs();
    } catch (error) {
      console.log(error);
    }
  }

  getInputValues() {
    const name = document.getElementById("nameInput")! as HTMLInputElement;
    const phoneNumber = document.getElementById(
      "phoneNumberInput"
    )! as HTMLInputElement;
    const adress = document.getElementById("eMailInput")! as HTMLInputElement;
    const problem = document.getElementById(
      "descriptionInput"
    )! as HTMLInputElement;

    this.request = {
      name: name.value,
      phone_number: phoneNumber.value,
      adress: adress.value,
      problem: problem.value,
    };
  }

  resetInputs() {
    const name = document.getElementById("nameInput")! as HTMLInputElement;
    const phoneNumber = document.getElementById(
      "phoneNumberInput"
    )! as HTMLInputElement;
    const adress = document.getElementById("eMailInput")! as HTMLInputElement;
    const problem = document.getElementById(
      "descriptionInput"
    )! as HTMLInputElement;
    name.value = "";
    phoneNumber.value = "";
    adress.value = "";
    problem.value = "";
  }

  async setPhoneNumber():Promise<string>{
    const cachedData = sessionStorage.getItem(LocalStorageEnums.settings.toString());

    if(cachedData==null){
    //ALERT: Dependency Injection
    const response =await new PanelSettingsServices().getSettings();
    return response![0]["phone_number"];
    }

    else{
      const parsedData = JSON.parse(cachedData);
      return parsedData![0]["phone_number"];
    }

  }
}
