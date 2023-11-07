import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:5000/api'

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token')
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error)
    return new Observable<never>()
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http
      .get<T>(`${this.API_URL}${url}`, {
        headers: this.createHeaders(),
        params
      })
      .pipe(catchError(this.handleError))
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http
      .post<T>(`${this.API_URL}${url}`, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError))
  }
}
