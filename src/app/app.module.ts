import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 
import { AngularFireModule   } from '@angular/fire/compat/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {   HttpClientModule } from "@angular/common/http";
import { CvprofileComponent } from './compoonents/cvprofile/cvprofile.component';
import { CvmakerComponent } from './compoonents/cvmaker/cvmaker.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './compoonents/auth/auth.component';
import { PagenotfoundComponent } from './compoonents/pagenotfound/pagenotfound.component';  
@NgModule({
  declarations: [
    AppComponent,
    CvprofileComponent,
    CvmakerComponent,
    AuthComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAQdEMAdBBTA0jRJYtaUjmznXLJsAriK6k',
      authDomain: 'auth-f03c9.firebaseapp.com',
      projectId: 'auth-f03c9',
      storageBucket: 'auth-f03c9.appspot.com',
      messagingSenderId: '447021386139',
      appId: '1:447021386139:web:2e27c0934ab4cf8cfb793e',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
