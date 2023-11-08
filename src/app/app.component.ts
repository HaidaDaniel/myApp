import { Component } from '@angular/core'
import { AuthService } from '../app/services/auth.service'
import * as AuthActions from './reducers/auth/auth.actions'
import { Store } from '@ngrx/store'
import { AppState } from './reducers/index'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    const refreshToken = this.authService.getRefreshToken()
    console.log(refreshToken)
    if (refreshToken) {
      this.store.dispatch(AuthActions.refresh())
    }
  }
  title = 'myApp2'
}
