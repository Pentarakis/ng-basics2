import { Injectable } from '@angular/core';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  constructor() { }

  readAll(): Character[] {
    return this.characters;
  }

  read(id: number): (Character | undefined) {
    return this.characters.find(character => character.id === id);
  }
}
