import { Observable, Subject } from 'rxjs';
import { Character } from './model/character';

export class CharacterServiceStub {

  readAllSub$: Subject<Character[]> = new Subject<Character[]>();
  responseSub$: Subject<Character> = new Subject<Character>();

  constructor() { }

  readAll(): Observable<Character[]> {
    return this.readAllSub$.asObservable();
  }

  read(id: number): Observable<Character> {
    return this.responseSub$.asObservable();
  }

  create(character: Character): Observable<Character> {
    return this.responseSub$.asObservable();
  }

  update(character: Character): Observable<Character> {
    return this.responseSub$.asObservable();
  }

}
