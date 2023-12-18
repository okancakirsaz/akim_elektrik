import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { FirebaseInit } from "../../../../core/init/firebase_init";

export class PanelMessagesServices{
    network:FirebaseInit=FirebaseInit.instance;
    
    async getMessages(){
        try{
          const col = await collection(this.network.firestore,'MESSAGES');
          const docs = await getDocs(col);
          let response:any[]=[];
          docs.forEach((doc:any) => {
            response.push(doc.data());
          });
          return response;
        }
        catch(error){
          console.log("You have an error in get messages\nThis is your error: ",error);
        }
      }
      async deleteMessage(data:string){ 
       try {
        await deleteDoc(doc(collection(this.network.firestore,"MESSAGES"),data));
       } catch (error) {
        console.log("You have an error in delete message\nThis is your error: ",error);
       }
      }
}