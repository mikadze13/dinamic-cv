import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/authguard/auth.guard';
import { AuthComponent } from './compoonents/auth/auth.component';
import { CvmakerComponent } from './compoonents/cvmaker/cvmaker.component';
import { CvprofileComponent } from './compoonents/cvprofile/cvprofile.component';
import { PagenotfoundComponent } from './compoonents/pagenotfound/pagenotfound.component';
import { NotCompleteGuard } from './core/not-complete.guard';

const routes: Routes = [
   
  { path: '', redirectTo:'auth', pathMatch:'full'},
  {path:'auth',component:AuthComponent},
  {path:'cvmaker',component:CvmakerComponent, canActivate:[AuthGuard]},
  { path:'cvprofile' , component:CvprofileComponent,canActivate:[AuthGuard]},
  {
    path:'**',
    component:PagenotfoundComponent
  } 

];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
