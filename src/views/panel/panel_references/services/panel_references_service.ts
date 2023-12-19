import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FirebaseInit } from "../../../../core/init/firebase_init";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export class PanelReferenceServices {
  network = FirebaseInit.instance;
  async postReferenceData(data: any) {
    try {
      const storageRef = ref(
        this.network.storage,
        "references/" + data["imgPaths"].name
      );
      await uploadBytesResumable(storageRef, data["imgPaths"]);
      data["imgPaths"] = await getDownloadURL(storageRef);
      const col = collection(this.network.firestore, "REFERENCES");
      await setDoc(doc(col, data["id"]), data);
    } catch (error) {
      console.log(
        "You have an error in write reference data\nThis is your error: ",
        error
      );
    }
  }
  async getReferences() {
    try {
      const col = await collection(this.network.firestore, "REFERENCES");
      const docs = await getDocs(col);
      let response: any[] = [];
      docs.forEach((doc: any) => {
        response.push(doc.data());
      });
      return response;
    } catch (error) {
      console.log(
        "You have an error in get references\nThis is your error: ",
        error
      );
    }
  }
  async deleteReference(id: string) {
    try {
      await deleteDoc(
        doc(collection(this.network.firestore, "REFERENCES"), id)
      );
    } catch (error) {
      console.log(
        "You have an error in delete reference\nThis is your error: ",
        error
      );
    }
  }

  async updateReference(data: any, id: string) {
    try {
      const col = await collection(this.network.firestore, "REFERENCES");
      const docRef = doc(col, id);

      if(typeof data["imgPaths"] ==='object'){
        const storageRef = ref(
          this.network.storage,
          "references/" + data["imgPaths"].name
        );
        await uploadBytesResumable(storageRef, data["imgPaths"]);
        data["imgPaths"] = await getDownloadURL(storageRef);
      }

      await updateDoc(docRef, data);
    } catch (error) {
      console.log(
        "You have an error in set new reference data \nThis is your error: ",
        error
      );
      return null;
    }
  }
  
}
