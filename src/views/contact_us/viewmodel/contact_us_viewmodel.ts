import { ContactUsService } from "../service/contact_us_service";

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
}
