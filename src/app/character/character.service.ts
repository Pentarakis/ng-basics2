import { Injectable } from '@angular/core';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:3000/characters';

  private readonly characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  constructor() { }

  readAll(): Character[] {
    return this.characters;
  }

  read(id: number): Promise<Response> {
    return fetch(`${this.baseUrl}/${id}`);
  }
}
