import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './components/product/product.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { AuthEffects } from './reducers/auth/auth.effects'
import { reducers } from './reducers'
import { RegisterComponent } from './components/register/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ModalComponent } from './components/modal/modal.component'
import { RatingModule } from 'ngx-bootstrap/rating'
import { CommentItemComponent } from './components/comment-item/comment-item.component'
import { CommentsListComponent } from './components/comments-list/comments-list.component'
import { CommentInputComponent } from './components/comment-input/comment-input.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    LoginComponent,
    ProductDetailComponent,
    RegisterComponent,
    ModalComponent,
    CommentItemComponent,
    CommentsListComponent,
    CommentInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
