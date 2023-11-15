import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/reducers'
import { AuthService } from '../../services/auth.service'
import * as AuthActions from 'src/app/reducers/auth/auth.actions'
import * as CartActions from 'src/app/reducers/cart/cart.actions'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated$: Observable<boolean>
  isLoading$: Observable<boolean>
  cartLength$: Observable<number>

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.isLoading$ = this.store.select((state) => state.auth.isLoading)
    this.cartLength$ = this.store.select((state) => state.cart.items.length)
    this.isAuthenticated$ = this.store.select((state) => state.auth.isAuth)
  }
  // ngOnInit(): void {
  //   this.store
  //     .select((state) => state.auth.isAuth)
  //     .subscribe((isAuth) => {
  //       this.isAuthenticated = isAuth
  //     })
  // }

  navigateToPage(page: string) {
    this.router.navigate([`/${page}`])
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('User logged out successfully')
        this.store.dispatch(AuthActions.logout())
      },
      error: (error) => {
        console.error('Logout failed:', error)
      }
    })
  }

  openCartModal() {
    this.cartService.openCart()
  }
}
