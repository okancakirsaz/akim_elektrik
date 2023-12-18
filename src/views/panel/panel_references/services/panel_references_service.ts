import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FirebaseInit } from "../../../../core/init/firebase_init";
import { collection, doc, setDoc } from "firebase/firestore";

export class PanelReferenceServices{
network = FirebaseInit.instance;
async postReferenceData(data:any){
    try{
     const storageRef= ref(this.network.storage, "references/"+data["imgPaths"].name);
     await uploadBytesResumable(storageRef,data["imgPaths"]);
     data["imgPaths"]=await getDownloadURL(storageRef);
       const col= collection(this.network.firestore,"REFERENCES");
       await setDoc(doc(col,data["title"]),data);
    }
    catch(error){
       console.log("You have an error in write reference data\nThis is your error: ",error);
    }
   }
}