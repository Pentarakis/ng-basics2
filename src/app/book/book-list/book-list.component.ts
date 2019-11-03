import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {id: 3, name: 'A Storm of Swords', isbn: '978-0553106633'},
    {id: 4, name: 'The Hedge Knight', isbn: '978-0976401100'},
    {id: 5, name: 'A Feast for Crows', isbn: '978-0553801507'}
  ];

  selectedBook: Book = new Book();

  constructor() { }

  ngOnInit() {
  }

  save(book: Book): void {
    book.id = this.createId();
    this.books.push(book);
  }

  private createId(): number {
    const lastBook = this.books[this.books.length - 1];
    if (lastBook && lastBook.id) {
      return lastBook.id + 1;
    }
    return 1;
  }

}
