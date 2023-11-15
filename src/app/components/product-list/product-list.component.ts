import { Component, OnInit } from '@angular/core'
import { ProductsService } from 'src/app/services/product.service'
import { Observable } from 'rxjs'
import { IProduct } from 'src/app/models/IProduct'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getAll()
  }
}
