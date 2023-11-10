import { Injectable } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalComponent } from '../components/modal/modal.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  bsModalRef!: BsModalRef<any>

  constructor(private modalService: BsModalService) {
    this.bsModalRef = {} as BsModalRef<any>
  }

  openModal(title: string, body: string): void {
    const initialState = { title, body }
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState })
  }

  closeModal(): void {
    if (this.bsModalRef) {
      this.bsModalRef.hide()
    }
  }
}
