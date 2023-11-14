import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
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

  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) {
    this.cartItems$ = this.store.select((state) => state.cart.items)
  }

  removeFromCart(productId: number) {
    this.store.dispatch(CartActions.removeFromCart({ productId }))
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart())
  }

  closeModal() {
    this.cartService.closeCart()
  }
}
