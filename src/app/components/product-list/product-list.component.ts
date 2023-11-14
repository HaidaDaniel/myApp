import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/IProduct'
import { ProductsService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = []
  isLoading: boolean = true

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productsService.getAll().subscribe(
      (products) => {
        this.products = products
        this.isLoading = false
      },
      (error) => {
        console.error('Error loading products:', error)
        this.isLoading = false
      }
    )
  }
}
