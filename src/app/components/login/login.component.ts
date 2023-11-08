import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'
import { Store } from '@ngrx/store'

import * as AuthActions from 'src/app/reducers/auth/auth.actions'

import { AppState } from 'src/app/reducers'
import { AuthResponse } from 'src/app/models/AuthResponse'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>
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

      this.authService.login(email, password).subscribe({
        next: (response: AuthResponse) => {
          console.log('User logged in:', response)
          this.store.dispatch(
            AuthActions.login({ email: email, password: password })
          )
        },
        error: (error) => {
          console.error('Authentication failed:', error)
        }
      })
    }
  }
}
