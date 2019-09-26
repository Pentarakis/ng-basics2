import { Component, OnInit } from '@angular/core';
import { Book } from '../../book/model/book';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  displayedColumns: string[] = ['id', 'name', 'culture'];

  constructor() { }

  ngOnInit() {
  }

  showDetails(character: Character): void {
  }

}
