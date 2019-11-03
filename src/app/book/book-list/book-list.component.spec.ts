import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../book.service';
import { BookServiceStub } from '../book.service.stub';
import { Book } from '../model/book';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  const books: Book[] = [
    {id: 3, name: 'A Storm of Swords', isbn: '978-0553106633'},
    {id: 4, name: 'The Hedge Knight', isbn: '978-0976401100'},
    {id: 5, name: 'A Feast for Crows', isbn: '978-0553801507'},
    {id: 6, name: 'The Sworn Sword', isbn: '978-0785126508'}
  ];
  let bookServiceStub: BookServiceStub;

  beforeEach(async(() => {
    bookServiceStub = new BookServiceStub(books);

    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookComponentStub ],
      providers: [
        { provide: BookService, useValue: bookServiceStub}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books using BookService', () => {
    expect(component.books).toEqual(books);
  });

  @Component({
    selector: 'ngb-book',
    template: ''
  })
  class BookComponentStub {
    @Input() book;
  }

});
