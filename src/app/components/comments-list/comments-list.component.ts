import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { IComment } from '../../models/IComment'
import { CommentService } from '../../services/comment.service'

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() productId: number = 0

  comments: IComment[] = []

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.loadComments()
  }

  loadComments() {
    if (this.productId) {
      this.commentService
        .getCommentsByProduct(this.productId)
        .subscribe((comments: IComment[]) => {
          this.comments = comments
        })
    }
  }
}
