import { createReducer, on } from '@ngrx/store'
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart
} from './cart.actions'
import { IProduct } from '../../models/IProduct'

export interface CartItem {
  product: IProduct
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export const initialState: CartState = {
  items: []
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product, quantity }) => {
    const existingItem = state.items.find(
      (item) => item.product.id === product.id
    )

    if (existingItem) {
      const updatedItems = state.items.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )

      return { ...state, items: updatedItems }
    } else {
      const newItem: CartItem = { product, quantity }
      return { ...state, items: [...state.items, newItem] }
    }
  }),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter((item) => item.product.id !== productId)
  })),
  on(updateCartItemQuantity, (state, { productId, quantity }) => {
    const updatedItems = state.items.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    )

    return { ...state, items: updatedItems }
  }),
  on(clearCart, (state) => ({ ...state, items: [] }))
)
