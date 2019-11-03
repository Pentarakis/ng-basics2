import { BookService } from './book.service';
import { Book } from './model/book';

export class BookServiceStub implements BookService {

  books: Book[]

  constructor(books: Book[]) {
    this.books = books;
  }

  readAll(): Book[] {
    return this.books;
  }

  read(id: number): Book | void  {
    return this.books.find(book => book.id === id);
  }
}
