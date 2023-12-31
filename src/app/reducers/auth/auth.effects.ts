import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of, EMPTY } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import * as AuthActions from './auth.actions'
import { AuthService } from '../../services/auth.service'

@Injectable()
export class AuthEffects {
  getRefreshTokenFromCookie(): string | null {
    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=')
      if (name.trim() === 'refreshToken') {
        return value
      }
    }
    return null
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((response) => {
            localStorage.setItem('token', response.accessToken)
            return AuthActions.loginSuccess({ email })
          }),
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
          map(() => AuthActions.registrationSuccess({ email })),
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
          map(() => {
            localStorage.removeItem('token')
            return AuthActions.logoutSuccess()
          }),
          catchError((error) => of(AuthActions.logoutFailure({ error })))
        )
      )
    )
  )

  refresh$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refresh),
      mergeMap(() => {
        const refreshToken = this.getRefreshTokenFromCookie()
        console.log(refreshToken)
        if (refreshToken) {
          return this.authService.refreshAccessToken(refreshToken).pipe(
            map((response) => {
              localStorage.setItem('token', response.accessToken)
              return AuthActions.refreshSuccess({ email: response.user.email })
            }),
            catchError((error) => {
              console.log('refresh error: ' + error)
              return EMPTY
            })
          )
        } else {
          return EMPTY
        }
      })
    )
  )
  constructor(private actions$: Actions, private authService: AuthService) {}
}
