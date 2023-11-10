import { Injectable } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalComponent } from '../components/modal/modal.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  bsModalRef!: BsModalRef<any>

  constructor(private modalService: BsModalService) {}

  openModal(title: string, body: string, onCloseCallback: () => void): void {
    const initialState = { title, body, onCloseCallback }
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState })
  }

  closeModal(): void {
    if (this.bsModalRef) {
      this.bsModalRef.hide()
    }
  }
}
