import { Injectable } from '@angular/core'; 
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn=false
  constructor(public firebaseAuth : AngularFireAuth) { }

   // sign in 
   async signin(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      console.log(res)
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  // signup
  async signup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  // logout
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

  // sign in with google
  GoogleSignIn(){
    return this.firebaseAuth.signInWithPopup(new GoogleAuthProvider()).then(res =>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user?.uid))
    },err=>{
      err.error
    } )
  }
}
