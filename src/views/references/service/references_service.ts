import { collection, getDocs } from "firebase/firestore";
import { FirebaseInit } from "../../../core/init/firebase_init";

export class ReferencesService {
    network = FirebaseInit.instance;
    async getReferences(){
        try{
          const col = await collection(this.network.firestore,'REFERENCES');
          const docs = await getDocs(col);
          let response:any[]=[];
          docs.forEach((doc:any) => {
            response.push(doc.data());
          });
          return response;
        }
        catch(error){
          console.log("You have an error in get references\nThis is your error: ",error);
        }
      }
}