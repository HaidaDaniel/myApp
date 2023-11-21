import { Component, Input } from '@angular/core'
import { IProduct } from 'src/app/models/IProduct'
import { Store } from '@ngrx/store'
import * as CartActions from 'src/app/reducers/cart/cart.actions'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct = {} as IProduct

  constructor(private store: Store) {}

  addToCart(product: IProduct) {
    this.store.dispatch(CartActions.addToCart({ product, quantity: 1 }))
  }
}
