import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { take, filter, pairwise } from 'rxjs/operators'

import { AppState } from 'src/app/reducers'
import { AuthService } from '../../services/auth.service'
import * as AuthActions from 'src/app/reducers/auth/auth.actions'
import * as CartActions from 'src/app/reducers/cart/cart.actions'
import { CartService } from 'src/app/services/cart.service'
import { PreviousPageService } from 'src/app/services/previous-page.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>
  isLoading$: Observable<boolean>
  cartLength$: Observable<number>

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private cartService: CartService,
    private authService: AuthService,
    private previousPageService: PreviousPageService
  ) {
    this.isLoading$ = this.store.select((state) => state.auth.isLoading)
    this.cartLength$ = this.store.select((state) => state.cart.items.length)
    this.isAuthenticated$ = this.store.select((state) => state.auth.isAuth)
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((e: any) => e instanceof NavigationEnd),
        pairwise()
      )
      .subscribe((e: any) => {
        this.previousPageService.setPreviousUrl(e[0].urlAfterRedirects)
      })
  }
  navigateToPage(page: string) {
    this.router.navigate([`/${page}`])
  }

  logout() {
    this.authService
      .logout()
      .pipe(take(1))
      .subscribe({
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
