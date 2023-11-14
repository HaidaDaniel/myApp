import { Injectable } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { CartModalComponent } from '../components/cart-modal/cart-modal.component'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bsModalRef!: BsModalRef<any>

  constructor(private modalService: BsModalService) {}

  openCart(): void {
    this.bsModalRef = this.modalService.show(CartModalComponent)
  }

  closeCart(): void {
    if (this.bsModalRef) {
      this.bsModalRef.hide()
    }
  }
}
