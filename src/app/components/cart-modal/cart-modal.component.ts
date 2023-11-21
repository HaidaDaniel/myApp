import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import Decimal from 'decimal.js'

import { CartItem } from '../../reducers/cart/cart.reducers'
import * as CartActions from '../../reducers/cart/cart.actions'
import { AppState } from 'src/app/reducers'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent {
  cartItems$: Observable<CartItem[]>
  totalCartPrice$: Observable<string>
  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) {
    this.cartItems$ = this.store.select((state) => state.cart.items)
    this.totalCartPrice$ = this.store.select((state) => {
      const totalPrice = state.cart.items.reduce((total, item) => {
        const itemPrice = new Decimal(item.product.price * item.quantity)
        return total.plus(itemPrice)
      }, new Decimal(0))

      return totalPrice.toFixed(2)
    })
  }

  removeFromCart(productId: number) {
    this.store.dispatch(CartActions.removeFromCart({ productId }))
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart())
  }

  incrementQuantity(productId: number, quantity: number) {
    this.store.dispatch(
      CartActions.updateCartItemQuantity({ productId, quantity })
    )
  }

  decrementQuantity(productId: number, quantity: number) {
    this.store.dispatch(
      CartActions.updateCartItemQuantity({ productId, quantity })
    )
  }
  closeModal() {
    this.cartService.closeCart()
  }

  getTotalPrice(quantity: number, price: number): string {
    const totalPrice = new Decimal(price * quantity)
    return totalPrice.toFixed(2)
  }
}
