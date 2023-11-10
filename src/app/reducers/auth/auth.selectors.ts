import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AuthState } from './auth.reducer'

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.isAuth
)
