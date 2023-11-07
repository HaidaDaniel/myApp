import { createReducer, on } from '@ngrx/store'
import * as AuthActions from './auth.actions'

export interface AuthState {
  user: any | null
  isAuth: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  error: null
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { email }) => ({
    ...state,
    email,
    isAuth: true,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.registrationSuccess, (state, { email }) => ({
    ...state,
    email,
    isAuth: true,
    error: null
  })),
  on(AuthActions.registrationFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    user: null,
    isAuth: false,
    error: null
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({ ...state, error }))
)
