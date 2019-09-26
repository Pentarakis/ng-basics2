import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BookComponent],
  exports: [BookComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class BookModule { }
