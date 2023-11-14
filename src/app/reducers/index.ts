import { ActionReducerMap } from '@ngrx/store'
import * as fromAuth from './auth/auth.reducer'
import * as fromCart from './cart/cart.reducers'

export interface AppState {
  auth: fromAuth.AuthState
  cart: fromCart.CartState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  cart: fromCart.cartReducer
}
