import { ContactUsService } from "../service/contact_us_service";

export class ContactUsViewModel{
service:ContactUsService=new ContactUsService();
request?:any;

sendMessage(){
this.getInputValues();
this.service.postMessage(this.request);
}

getInputValues(){
const name = document.getElementById("nameInput")! as HTMLInputElement;
const phoneNumber = document.getElementById("phoneNumberInput")! as HTMLInputElement;
const adress = document.getElementById("eMailInput")! as HTMLInputElement;
const problem = document.getElementById("descriptionInput")! as HTMLInputElement;

this.request={
    "name":name.value,
    "phone_number":phoneNumber.value,
    "adress":adress.value,
    "problem":problem.value
}
}
}