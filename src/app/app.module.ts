import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './components/product/product.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginComponent } from './components/login/login.component'

import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { AuthEffects } from './reducers/auth/auth.effects'
import { reducers } from './reducers'
import { RegisterComponent } from './components/register/register.component'
import { ErrorModalComponent } from './components/error-modal/error-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    LoginComponent,
    ProductDetailComponent,
    RegisterComponent,
    ErrorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
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
