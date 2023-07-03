import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, CanLoadFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { ClientFormComponent } from '../../clients/components/client-form/client-form.component';

export const authGuardActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  // const isLoggedIn = this.authService.isLoggedIn()
  // return isLoggedIn ? isLoggedIn:this.router.createUrlTree(['/logowanie']);
  const isLoggedIn = inject(AuthService).isLoggedIn();
  return isLoggedIn ? isLoggedIn:inject(Router).createUrlTree(['/logowanie']);
}

export const authGuardLoad: CanLoadFn = (route: Route, segments: UrlSegment[]) => {

  // const isLoggedIn = this.authService.isLoggedIn()
  // return isLoggedIn ? isLoggedIn:this.router.createUrlTree(['/logowanie']);
  const isLoggedIn = inject(AuthService).isLoggedIn();
  return isLoggedIn ? isLoggedIn:inject(Router).createUrlTree(['/logowanie']);
}

export const authGuardMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {

  // const isLoggedIn = this.authService.isLoggedIn()
  // return isLoggedIn ? isLoggedIn:this.router.createUrlTree(['/logowanie']);
  const isLoggedIn = inject(AuthService).isLoggedIn();
  return isLoggedIn ? isLoggedIn:inject(Router).createUrlTree(['/logowanie']);
}

export const authGuardDeactivate: CanDeactivateFn<ClientFormComponent> = (component: ClientFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
  if(component.clientForm.dirty){
    return window.confirm("Czy napewno chcesz odrzucić niezapisane zmiany?")
  }else{
    return true;
  }

}
