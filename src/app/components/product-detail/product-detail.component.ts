import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductsService } from '../../services/product.service'
import { IProduct } from '../../models/IProduct'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {} as IProduct
  isLoading: boolean = true
  private productSubscription: Subscription | undefined

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')
    if (productId) {
      this.productSubscription = this.productsService
        .getProductById(productId)
        .subscribe({
          next: (data) => {
            this.product = data
            this.isLoading = false
          },
          error: (error) => {
            console.error('Failed to load product details', error)
            this.isLoading = false
          }
        })
    }
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe()
    }
  }
}
