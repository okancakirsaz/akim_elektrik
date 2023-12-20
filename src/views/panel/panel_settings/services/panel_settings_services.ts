import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { FirebaseInit } from "../../../../core/init/firebase_init";

export class PanelSettingsServices{
    network:FirebaseInit=FirebaseInit.instance;

    async getSettings(){
        try {
            const col = await collection(this.network.firestore, "SETTINGS");
            const docs = await getDocs(col);
            let response: any[] = [];
            docs.forEach((doc: any) => {
              response.push(doc.data());
            });
            return response;
          } catch (error) {
            console.log(
              "You have an error in get settings\nThis is your error: ",
              error
            );
          }
    }

    async updateSettings(data: any) {
        try {
          
          const col = await collection(this.network.firestore, "SETTINGS");
          const docRef = doc(col, "user_settings");
          await updateDoc(docRef, data);
          
        } catch (error) {
          console.log(
            "You have an error in set new settings data \nThis is your error: ",
            error
          );
          return null;
        }
      }
}