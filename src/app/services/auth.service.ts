import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/login', { email, password });
  }

  registration(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/registration', { email, password });
  }

  logout(): Observable<void> {
    return this.api.post<void>('/logout', {});
  }
}
