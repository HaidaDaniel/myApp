import { Component, Input, EventEmitter, Output } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = ''
  @Input() body: string = ''
  @Output() closeModal: EventEmitter<any> = new EventEmitter()

  constructor(public bsModalRef: BsModalRef) {}

  onClose() {
    this.closeModal.emit()
    this.bsModalRef.hide()
  }
}
