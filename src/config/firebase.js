import app from 'firebase/app';
import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyB6Gxo6Q9vUAlvK-WgkWSmalWd4B-HgJqc",
    authDomain: "techie-6be0a.firebaseapp.com",
    databaseURL: "https://techie-6be0a.firebaseio.com",
    projectId: "techie-6be0a",
    storageBucket: "techie-6be0a.appspot.com",
    messagingSenderId: "428020658006",
    appId: "1:428020658006:web:7029c1b2d5c008b031b0f7"
  };

  class Firebase{

    constructor(){

      app.initializeApp(firebaseConfig)
      this.auth = app.auth();
      this.db = app.firestore();
      this.storage = app.storage();  
    }

   async getProfile(id){
          
     let data = await this.db.collection("users").doc(id).get();
     return data.data(); 

    }

    login(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }

    logout(){
     return this.auth.signOut()
    }

    checkEmailVerified(){
      if(!this.auth.currentUser.emailVerified){
        return false;
      }

      return true;
     }

    async register(name,email,password){
      return this.auth.createUserWithEmailAndPassword(email,password)

       }

    Auth(){
        if(!this.auth.currentUser){
          return false;
        }
        return true
      } 

    updateProfile(user){
        return this.db.collection("users").doc(user.id).set(user);
      }  

    isfirebaseInit(){
        return new Promise( resolve => {
          this.auth.onAuthStateChanged(resolve)
        }); 
      }

    getCurrentUsername(){
        if(!this.auth.currentUser){
          return false;
        }

        return this.auth.currentUser.email
      }
    
}

    // export async function UpdateUser(obj){  
    //     await firebase.firestore().collection("users").doc(obj.id).set(obj).then(()=> {
    //        });
    // }

    // //Update Profile
    // export function UpdateProfile(obj) {

    //     var res ={};
    //     res.message = 'ok';
    //     console.log(obj);
    // return res;

    // }
    
    //     //GetPost
    //     export  function Addpost(obj) {
            
    //         var res ={};
    //         res.message = 'ok';
    //         console.log('Server',obj);
    //         return res;
    //     }

    //     export  function Updatepost(obj) {
            
    //         var res ={};
    //         res.message = 'ok';
    //         console.log('Server',obj);
    //         return res;
    //     }



export default new Firebase ();

 

  