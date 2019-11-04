import { BookService } from './book.service';

describe('BookService', () => {

  let service: BookService;

  beforeEach(() => {
    service = new BookService();
  });

  describe('readAll(): Book[]', () => {
    it('should return book list', () => {
      const result = service.readAll();
      expect(result).toEqual(service.books);
    });
  });

  describe('read(id: number): Book | void', () => {
    it('should return book with the specified ID, if it is in the list', () => {

    });
  });
});
