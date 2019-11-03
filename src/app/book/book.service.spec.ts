import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    service = new BookService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('readAll(): Book[]', () => {
    it('should return book list', () => {
      expect(service.readAll()).toEqual(service.books);
    });
  });

  describe('read(id: number): Book | void', () => {
    it('should return book with the specified ID, if it is in the list', () => {
      expect(service.read(3)).toEqual(service.books[0]);
    });
    it('should return undefined, if the list does not contain a book with the given ID', () => {
      expect(service.read(0)).toBeUndefined();
    });
  });

});
