import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { Observable } from 'rxjs'
import { AuthResponse } from '../models/AuthResponse'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api: ApiService, private cookieService: CookieService) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/login', { email, password })
  }

  registration(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/registration', { email, password })
  }

  logout(): Observable<void> {
    this.cookieService.set('refreshToken', '')
    return this.api.post<void>('/logout', {})
  }

  refreshAccessToken(): Observable<AuthResponse> {
    return this.api.get<AuthResponse>('/refresh', {})
  }
}
