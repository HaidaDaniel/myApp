import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedPage: string

  constructor(private router: Router) {
    this.selectedPage = 'shop'
  }

  navigateToPage(page: string) {
    this.selectedPage = page
    this.router.navigate([`/${page}`])
  }
}
