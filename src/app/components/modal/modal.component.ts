import { Component, Input, EventEmitter, Output } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = ''
  @Input() body: string = ''
  @Input() onCloseCallback: () => void = () => {}

  constructor(public bsModalRef: BsModalRef) {}

  onClose() {
    this.onCloseCallback()
    this.bsModalRef.hide()
  }
}
