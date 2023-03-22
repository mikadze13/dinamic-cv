import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { FirebaseService } from '../../service/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private firebase:FirebaseService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const onSignIn = false; 

    if (this.firebase.isAuthenticated())  {
       
      console.log("trueeee")
       return true
    }else {
      // Redirect the user to the login page
      this.router.navigate(['/auth']);
      console.log("falseeeeeeeee")
      return false;
    }  
  
     
  }
  
}
