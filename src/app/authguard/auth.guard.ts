import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private firebase:FirebaseService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Implement your logic here to check if the user is authenticated
    // For demo purposes, we'll always return true
    const onSignIn = false; // <-- Replace with your authentication logic

    if ( this.firebase.isLoggedIn = true)  {
      this.router.navigate(['/cvmaker'])
      return true
    } else {
      // Redirect the user to the login page
      this.router.navigate(['/auth']);
      return false;
    }  
     
  }
  
}
