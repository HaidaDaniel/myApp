import { createAction, props } from '@ngrx/store'
import { IProduct } from '../../models/IProduct'

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: IProduct; quantity: number }>()
)
export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ productId: number }>()
)
export const updateCartItemQuantity = createAction(
  '[Cart] Update Item Quantity',
  props<{ productId: number; quantity: number }>()
)

export const clearCart = createAction('[Cart] Clear Cart')
