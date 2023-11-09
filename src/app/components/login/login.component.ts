import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import * as AuthActions from 'src/app/reducers/auth/auth.actions'

import { AppState } from 'src/app/reducers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
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
    }
  }
}
