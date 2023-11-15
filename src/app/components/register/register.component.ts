import { Component, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { AuthResponse } from 'src/app/models/AuthResponse'
import { ModalService } from 'src/app/services/modal.service'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  registerForm: FormGroup
  error: string = ''

  private closeTimeout: any
  private destroy$ = new Subject<void>()

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: ModalService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const email: string = this.registerForm.get('email')?.value
      const password: string = this.registerForm.get('password')?.value

      this.authService
        .registration(email, password)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: AuthResponse) => {
            this.modalService.openModal(
              'send activation link to:',
              response.user.email,
              () => {
                this.onCloseModal()
              }
            )
          },
          error: (error) => {
            console.log(error)
            this.modalService.openModal('Error', error.error.message, () => {
              this.onCloseErrorModal()
            })
          }
        })
    }
  }

  onCloseModal() {
    this.closeTimeout = setTimeout(() => {
      this.router.navigate(['/login'])
    }, 500)
  }

  onCloseErrorModal() {}
  ngOnDestroy() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout)
    }
  }
}
