import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseInit } from "../../../core/init/firebase_init";

export class ContactUsService{
    network:FirebaseInit=FirebaseInit.instance;

    async postMessage(data:Record<string,any>){
        try{
            const col= collection(this.network.firestore,"MESSAGES");
            await setDoc(doc(col,data["name"]+data["phone_number"]),data);
         }
         catch(error){
            console.log("You have an error in write message data\nThis is your error: ",error);
         }
    }
}