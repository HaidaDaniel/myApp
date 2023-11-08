import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import * as AuthActions from 'src/app/reducers/auth/auth.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(AuthActions.refresh())
  }
  title = 'myApp2'
}
