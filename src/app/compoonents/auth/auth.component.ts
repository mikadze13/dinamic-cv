import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
export class User {
  username!: string;
  password!: string;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  constructor(public firebaseService: FirebaseService, private router: Router) { }
  isSignedIn = false;
  show: boolean = false;
  hideform: boolean = false;
  user = new User();
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }


  UserInfo = new FormGroup({
    gmail: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  get gmail() {
    return this.UserInfo.get('gmail')
  }
  get password() {
    return this.UserInfo.get('password')
  }

  signIn = new FormGroup({
    Gmail: new FormControl('', [Validators.email]),
    Password: new FormControl('', [Validators.required])
  })
  get Gmail() {
    return this.signIn.get('Gmail')
  }
  get Password() {
    return this.signIn.get('Password')
  }

  // sign up
  async onSignup(email: string, password: string) {
    this.UserInfo.reset()
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigate(['/cvmaker']);
    }

  }
  // sign in
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigate(['/cvmaker']);
    }
  }
  // sign in with google
  async signInWithGoogle() {

    await this.firebaseService.GoogleSignIn()
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigate(['/cvmaker']);
    }

  }
  // sign in with facebook
  async SignInWithFacebook() {
    await this.firebaseService.FacebookSignIn()
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigate(['/cvmaker'])
    }
  }
// sign in with guthub
async SignInWithGithub() {
  await this.firebaseService.GithubSignIn()
  if (this.firebaseService.isLoggedIn) {
    this.isSignedIn = true;
    this.router.navigate(['/cvmaker'])
  }
}
  // logout
  handleLogout() {
    this.isSignedIn = false

  }


  signInForm() {
    this.show = true

  }
  hide() {
    this.show = false
  }
}
