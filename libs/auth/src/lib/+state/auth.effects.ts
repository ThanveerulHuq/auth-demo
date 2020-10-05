import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as fromAuth from './auth.reducer';
import * as AuthActions from './auth.actions';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  // loadAuth$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loadAuth),
  //     fetch({
  //       run: (action) => {
  //         // Your custom service 'load' logic goes here. For now just return a success action...
  //         return AuthActions.loadAuthSuccess({ auth: [] });
  //       },

  //       onError: (action, error) => {
  //         console.error('Error', error);
  //         return AuthActions.loadAuthFailure({ error });
  //       },
  //     })
  //   )
  // );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.Login),
    mergeMap(({ username, password }) =>
      this.authService.login({ username, password }).pipe(
        tap((res: { token: string }) => this.storeInLocalStorage(res)),
        map((res: { token: string }) => AuthActions.LoginSuccess(res)),
        catchError((err: { error: string }) => of(AuthActions.LoginFail(err)))
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}

  storeInLocalStorage({ token }) {
    console.log(token);
    localStorage.setItem('access_token', token);
  }
}
