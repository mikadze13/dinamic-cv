import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  constructor(public firebaseService: FirebaseService){}
  isSignedIn = false;
  show:boolean = false;
  hideform:boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }
  
  // sign up
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
    } 

  }
  // sign in
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
    } 
  }
  // sign in with google
  async signInWithGoogle() {

    await this.firebaseService.GoogleSignIn()
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
    } 

  } 
  // logout
  handleLogout() {
    this.isSignedIn = false

  }


  signInForm(){
    this.show=true

  }
  hide(){
    this.show=false
  }
}
