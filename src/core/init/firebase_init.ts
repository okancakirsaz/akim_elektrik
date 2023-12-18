import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export class FirebaseInit{
static instance:FirebaseInit = new FirebaseInit();
options={
    apiKey: "AIzaSyAy59WVMZ-f_qZvNZRbXNKpyePHuH8RR0I",
    authDomain: "akim-elektrik-website.firebaseapp.com",
    projectId: "akim-elektrik-website",
    storageBucket: "akim-elektrik-website.appspot.com",
    messagingSenderId: "858417992285",
    appId: "1:858417992285:web:74b8719894d297746cf3b4",
     measurementId: "G-7PZ6D35RR1"
    }
app=initializeApp(this.options);
firestore = getFirestore(this.app);
auth = getAuth(this.app);
storage = getStorage(this.app);
}