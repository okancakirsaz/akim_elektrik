import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { FirebaseInit } from "../../../../core/init/firebase_init";

export class PanelSupportServices{
    network:FirebaseInit=FirebaseInit.instance;
    
    async getMessages(){
        try{
          const col = await collection(this.network.firestore,'CALL_SERVICE');
          const docs = await getDocs(col);
          let response:any[]=[];
          docs.forEach((doc:any) => {
            response.push(doc.data());
          });
          return response;
        }
        catch(error){
          console.log("You have an error in get supports\nThis is your error: ",error);
        }
      }
      async deleteMessage(name:string){ 
       try {
        await deleteDoc(doc(collection(this.network.firestore,"CALL_SERVICE"),name));
       } catch (error) {
        console.log("You have an error in delete support\nThis is your error: ",error);
       }
      }
}