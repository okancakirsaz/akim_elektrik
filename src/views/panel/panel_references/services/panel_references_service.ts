import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FirebaseInit } from "../../../../core/init/firebase_init";
import { collection, doc, setDoc } from "firebase/firestore";

export class PanelReferenceServices{
network = FirebaseInit.instance;
async postReferenceData(data:any){
    try{
       for(let i=0;i<=data["imgPaths"].length-1;i++){
     const storageRef= ref(this.network.storage, "references/"+data["id"]+"/"+data["imgPaths"][i].name);
     await uploadBytesResumable(storageRef,data["imgPaths"][i]);
     data["imgPaths"][i]=await getDownloadURL(storageRef);
       }
       const col= collection(this.network.firestore,"REFERENCES");
       await setDoc(doc(col,data["id"]),data);
    }
    catch(error){
       console.log("You have an error in write reference data\nThis is your error: ",error);
    }
   }
}