import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { Character } from './model/character';

describe('CharacterService', () => {
  let httpTestingController: HttpTestingController;
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CharacterService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('readAll(): Observable<Character[]>', () => {
    it('should send a GET request to the backend on subscribe', () => {
      // GIVEN
      const responseData = TEST_CHARACTERS;
      const success = jest.fn();

      // WHEN
      service.readAll().subscribe(success);

      // THEN
      const req = httpTestingController.expectOne('http://localhost:3000/characters?_start=20&_end=120');

      expect(req.request.method).toEqual('GET');
      req.flush(responseData);
      expect(success).toHaveBeenCalledWith(responseData);
    });

  });

  const TEST_CHARACTERS: Character[] = [{
    'id': 1,
    'name': '',
    'culture': 'Braavosi'
  }];
});
