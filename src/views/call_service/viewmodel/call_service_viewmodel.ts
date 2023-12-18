import { CallServiceServices } from "../services/call_service_services";

export class CallServiceViewModel{
service:CallServiceServices=new CallServiceServices();
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
    const adress = document.getElementById("adressInput")! as HTMLInputElement;
    const problem = document.getElementById(
      "problemInput"
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
    const adress = document.getElementById("adressInput")! as HTMLInputElement;
    const problem = document.getElementById(
      "problemInput"
    )! as HTMLInputElement;
    name.value = "";
    phoneNumber.value = "";
    adress.value = "";
    problem.value = "";
  }
}