import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './compoonents/auth/auth.component';
import { CvmakerComponent } from './compoonents/cvmaker/cvmaker.component';
import { CvprofileComponent } from './compoonents/cvprofile/cvprofile.component';
import { PagenotfoundComponent } from './compoonents/pagenotfound/pagenotfound.component';

const routes: Routes = [
   
  { path: '', redirectTo:'auth', pathMatch:'full'},
  {path:'auth',component:AuthComponent},
  {path:'cvmaker',component:CvmakerComponent},
  { path:'cvprofile' , component:CvprofileComponent},
  {
    path:'**',
    component:PagenotfoundComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
