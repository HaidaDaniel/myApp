import { Component, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'

import * as AuthActions from 'src/app/reducers/auth/auth.actions'
import { AppState } from 'src/app/reducers'
import { ModalService } from 'src/app/services/modal.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup
  error: string = ''
  private closeTimeout: any
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private modalService: ModalService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email: string = this.loginForm.get('email')?.value
      const password: string = this.loginForm.get('password')?.value

      this.store.dispatch(AuthActions.login({ email, password }))

      this.store.select('auth').subscribe((authState) => {
        if (authState.error) {
          console.log(authState.error)
          this.modalService.openModal(
            'Error',
            authState.error.error.message,
            () => {
              this.modalService.closeModal(), this.onCloseErrorModal()
            }
          )
        } else if (authState.isAuth) {
          this.modalService.openModal(
            'Login Successful',
            'Return to home page',
            () => {
              this.modalService.closeModal(), this.onCloseModal()
            }
          )
        }
      })
    }
  }
  onCloseModal() {
    this.closeTimeout = setTimeout(() => {
      this.router.navigate(['/shop'])
    }, 500)
  }

  onCloseErrorModal() {
    const clearErrorAction = AuthActions.clearAuthError()
    this.store.dispatch(clearErrorAction)
  }
  ngOnDestroy() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout)
    }
  }
}
