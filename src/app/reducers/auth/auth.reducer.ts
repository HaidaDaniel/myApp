import { createReducer, on } from '@ngrx/store'
import * as AuthActions from './auth.actions'

export interface AuthState {
  email: string | null
  isAuth: boolean
  error: string | null
}

const initialState: AuthState = {
  email: null,
  isAuth: false,
  error: null
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { email }) => ({
    ...state,
    email: email,
    isAuth: true,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.registrationSuccess, (state, { email }) => ({
    ...state,
    email,
    isAuth: false,
    error: null
  })),
  on(AuthActions.registrationFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(AuthActions.refresh, (state) => ({
    ...state,
    error: null
  })),
  on(AuthActions.refreshSuccess, (state, { email }) => ({
    ...state,
    email: email,
    isAuth: true,
    error: null
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    email: null,
    isAuth: false,
    error: null
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({ ...state, error }))
)
