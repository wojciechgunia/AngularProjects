/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { AuthService } from '../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as AuthActions from "./auth.actions";
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
@Injectable()
export class AuthEffects
{
  login$ = createEffect(()=>
  this.actions$.pipe(ofType(AuthActions.login),
  switchMap((action) => {
    return this.authService.login(action.loginData).pipe(
      map(
        (user) => AuthActions.loginSuccess({user: {...user}})
        ),
      catchError((err) =>
        of(AuthActions.loginFailure({error: 'Wystąpił błąd'}))
        ));
  })));

  register$ = createEffect(()=>
  this.actions$.pipe(ofType(AuthActions.register),
  switchMap((action) => {
    return this.authService.register(action.registerData).pipe(
      map(
        (user) => {
          this.router.navigate(['/logowanie']);
          this.notifierService.notify('success','Rejestracja zakończona sukcesem! Aktywuj konto za pomocą adresu e-mail.');
          return AuthActions.registerSuccess();
        }
      ),
      catchError((err) =>
        of(AuthActions.registerFailure({error: 'Wystąpił błąd'}))
      ));
  })));

  constructor(private actions$: Actions, private authService:AuthService, private router: Router, private notifierService: NotifierService){}
}
