import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Book } from '../model/book';
import { BookService } from '../book.service';
import { BookServiceStub } from '../book.service.stub';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const TEST_DATA: Book[] = [
    {id: 1, name: 'The Hedge Knight', isbn: '978-0976401100'},
    {id: 2, name: 'A Feast for Crows', isbn: '978-0553801507'}
  ];

  beforeEach(async(() => {

    const bookServiceStub = new BookServiceStub();
    bookServiceStub.books = TEST_DATA;

    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookComponentStub ],
      providers: [
        { provide: BookService, useValue: bookServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should load books using BookService', () => {
    expect(component.books).toEqual(TEST_DATA);
  });

  @Component({
    selector: 'ngb-book',
    template: ''
  })
  class BookComponentStub {
    @Input()
    book;
  }
});
