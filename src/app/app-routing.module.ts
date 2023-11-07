import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from './components/product-list/product-list.component'
import { LoginComponent } from './components/login/login.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { RegisterComponent } from './components/register/register.component'
const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
