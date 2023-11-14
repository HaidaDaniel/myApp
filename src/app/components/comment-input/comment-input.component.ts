import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/reducers'
import { CommentService } from 'src/app/services/comment.service'

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss']
})
export class CommentInputComponent {
  @Input() productId: number = 0
  commentForm: FormGroup
  auth$: Observable<boolean>
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private commentService: CommentService
  ) {
    this.commentForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.maxLength(250)]],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]]
    })

    this.auth$ = this.store.select((state) => state.auth.isAuth)
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const comment = {
        text: this.commentForm.value.text,
        rating: this.commentForm.value.rating
      }
      this.commentService
        .addComment(this.productId, comment)
        .subscribe((response) => {
          console.log(response)
        })
      this.commentForm.reset()
    }
  }
}
