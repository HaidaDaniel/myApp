import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'
import { Store } from '@ngrx/store'

import * as AuthActions from 'src/app/reducers/auth/auth.actions'
import { AppState } from 'src/app/reducers'
import { AuthResponse } from 'src/app/models/AuthResponse'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup
  error: string = '' // Свойство для хранения ошибки

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>
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

      this.authService.registration(email, password).subscribe(
        (response: AuthResponse) => {
          console.log('User registered:', response)
          this.store.dispatch(AuthActions.login({ email, password }))
        },
        (error) => {
          console.error('Registration failed:', error)
          this.error = 'Registration failed. Please try again.' // Устанавливаем ошибку
        }
      )
    }
  }
}
