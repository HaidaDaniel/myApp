import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const MaterialComponents = [
  MatCardModule,
  MatToolbarModule,
  MatButtonToggleModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [...MaterialComponents],
  exports: [...MaterialComponents],
})
export class MaterialModule {}
