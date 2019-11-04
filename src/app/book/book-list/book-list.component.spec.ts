import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookComponentStub ]
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
    expect(component.books).toEqual(undefined);
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
