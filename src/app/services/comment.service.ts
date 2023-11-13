import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IComment } from '../models/IComment'
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = '/comments' //

  constructor(private apiService: ApiService) {}

  getCommentsByProduct(productId: number): Observable<IComment[]> {
    const url = `/products/${productId}${this.commentsUrl}`
    return this.apiService.get<IComment[]>(url)
  }

  addComment(productId: number, comment: IComment): Observable<IComment> {
    const url = `/products/${productId}${this.commentsUrl}`
    return this.apiService.post<IComment>(url, comment)
  }
}
