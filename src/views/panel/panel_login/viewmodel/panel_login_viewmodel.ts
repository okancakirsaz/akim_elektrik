import { LocalStorageEnums } from "../../../../core/enums/local_storage_enums";
import { PanelLoginServices } from "../services/panel_login_services";

export class PanelLoginViewModel{
service:PanelLoginServices= new PanelLoginServices();

async signIn(){
    const passwordController = document.getElementById("panelPassword")! as HTMLInputElement;
    const mailController = document.getElementById("panelUserName")!  as HTMLInputElement;
    try {
       const response= await this.service.signInPanel(mailController.value,passwordController.value);
       if(response.user!=null){
        localStorage.setItem(LocalStorageEnums.token.toString(),response.user.uid);
       this.navigateToPanel();
       }
    } catch (error) {
    alert("E-posta veya şifre yanlış tekrar deneyiniz.");
    console.log(error);
    }
}

navigateToPanel(){
    window.location.href="/admin-references";
}
}