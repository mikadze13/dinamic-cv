import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { FirebaseService } from '../../service/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private firebase: FirebaseService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.firebase.isAuthenticated()) {
      this.router.navigate(['/auth']);
    } 
    return this.firebase.isAuthenticated()


  }

}
