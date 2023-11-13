import { Component, Input } from '@angular/core'
import { IComment } from '../../models/IComment'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent {
  @Input() comment: IComment = {} as IComment
}
