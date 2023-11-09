import { createAction, props } from '@ngrx/store'

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
)
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ email: string }>()
)
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
)

export const registration = createAction(
  '[Auth] Registration',
  props<{ email: string; password: string }>()
)
export const registrationSuccess = createAction(
  '[Auth] Registration Success',
  props<{ email: string }>()
)
export const registrationFailure = createAction(
  '[Auth] Registration Failure',
  props<{ error: string }>()
)
export const refresh = createAction('[Auth] Refresh')
export const refreshSuccess = createAction(
  '[Auth] Refresh Success',
  props<{ email: string }>()
)
export const refreshUnSuccess = createAction('[Auth] Refresh UnSuccess')
export const logout = createAction('[Auth] Logout')
export const logoutSuccess = createAction('[Auth] Logout Success')
export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
)
