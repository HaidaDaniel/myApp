import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss']
})
export class ScrollToTopButtonComponent {
  isShow: boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShow = window.scrollY > 300
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
