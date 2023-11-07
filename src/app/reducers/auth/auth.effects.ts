import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import * as AuthActions from './auth.actions'
import { AuthService } from '../../services/auth.service'

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((user) => AuthActions.loginSuccess({ email })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  )

  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registration),
      mergeMap(({ email, password }) =>
        this.authService.registration(email, password).pipe(
          map((user) => AuthActions.registrationSuccess({ email })),
          catchError((error) => of(AuthActions.registrationFailure({ error })))
        )
      )
    )
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => AuthActions.logoutSuccess()),
          catchError((error) => of(AuthActions.logoutFailure({ error })))
        )
      )
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
