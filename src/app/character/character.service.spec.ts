import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CHARACTERS } from '../../../data';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: CharacterService = TestBed.get(CharacterService);
    expect(service).toBeTruthy();
  });

  describe('readAll(): Observable<Character[]>', () => {
    it('should send a GET request to the backend on subscribe', () => {
      // GIVEN
      const service: CharacterService = TestBed.get(CharacterService);
      const responseData = CHARACTERS;
      const success = jest.fn();

      // WHEN
      service
        .readAll()
        .subscribe(success);

      // THEN
      const req = httpTestingController
        .expectOne('http://localhost:3000/characters?_start=20&_end=120');

      expect(req.request.method).toEqual('GET');
      req.flush(responseData);
      expect(success).toHaveBeenCalledWith(responseData);
    });
  });

});
