import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private errorModalSubject = new Subject<string>()

  errorModal$ = this.errorModalSubject.asObservable()

  openErrorModal(message: string) {
    this.errorModalSubject.next(message)
  }

  closeErrorModal() {
    this.errorModalSubject.next('')
  }
}
