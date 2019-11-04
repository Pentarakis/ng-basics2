import { Injectable } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceStub implements BookService {

  books: Book[];

  readAll(): Book[] {
    return this.books;
  }

  read(id: number): Book | void  {
    return this.books.find(book => book.id === id);
  }

  constructor() { }
}
