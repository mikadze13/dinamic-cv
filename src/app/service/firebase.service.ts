import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, AuthCredential } from 'firebase/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  // sign in 
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.user))
      }).catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;

        // Display an error message to the user
        if (errorCode === 'auth/wrong-password') {
          // Display a message for wrong password error
          alert('The password you entered is incorrect.');
        } else if (errorCode === 'auth/user-not-found') {
          // Display a message for user not found error
          alert('There is no user record corresponding to this email.');
        } else {
          // Display a generic error message for other errors
          alert(errorMessage);
        }
      });
  }

  // sign in with google
  GoogleSignIn() {
    return this.firebaseAuth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user?.uid))
      console.log(localStorage.setItem('user', JSON.stringify(res.user?.uid)))
    }, err => {
      err.error
    })
  }

  // signup
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))

      }).catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;

        // Display an error message to the user
        if (errorCode === 'auth/wrong-password') {
          // Display a message for wrong password error
          alert('The password you entered is incorrect.');
        } else if (errorCode === 'auth/user-not-found') {
          // Display a message for user not found error
          alert('There is no user record corresponding to this email.');
        } else {
          // Display a generic error message for other errors
          alert(errorMessage);
        }
      });
  }
  // logout
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }






  isAuthenticated() {
    if (this.isLoggedIn == true) {
      return true
    } else {
      return false
    }
  }
}
