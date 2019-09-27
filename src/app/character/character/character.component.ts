import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    const id = Number(this.route.snapshot.params.id);
    const character = this.characterService.read(id);
    if (character) {
      this.character = character;
    }
  }

  ngOnInit() {
  }

  save(): void {
  }
}
