import { Observable, Subject } from 'rxjs';
import { Character } from './model/character';

export class CharacterServiceStub {

  constructor() { }

  responseSub$: Subject<Character> = new Subject<Character>();
  readAllSub$: Subject<Character[]> = new Subject<Character[]>();

  readAll(): Observable<Character[]> {
    return this.readAllSub$;
  }

  read(id: number): Observable<Character> {
    return this.responseSub$;
  }

  create(character: Character): Observable<Character> {
    return this.responseSub$;
  }

  update(character: Character): Observable<Character> {
    return this.responseSub$;
  }
}
