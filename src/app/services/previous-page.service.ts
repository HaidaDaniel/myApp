import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PreviousPageService {
  private previousUrl: string | null = null

  setPreviousUrl(url: string): void {
    this.previousUrl = url
  }

  getPreviousUrl(): string | null {
    return this.previousUrl
  }
}
