import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseInit } from '../../../../core/init/firebase_init';

export class PanelLoginServices{
   network:FirebaseInit= FirebaseInit.instance;
   
   async signInPanel(email:string,password:string){
    return await signInWithEmailAndPassword(this.network.auth, email, password);
   }
}