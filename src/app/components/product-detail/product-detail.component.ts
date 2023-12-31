import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductsService } from '../../services/product.service'
import { IProduct } from '../../models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {} as IProduct

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')
    if (productId) {
      this.productsService.getProductById(productId).subscribe(
        (data) => {
          this.product = data
        },
        (error) => {
          console.error('Failed to load product details', error)
        }
      )
    }
  }
}
