import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  constructor() { }

  ngOnInit() {
  }

  save(): void {
  }
}
