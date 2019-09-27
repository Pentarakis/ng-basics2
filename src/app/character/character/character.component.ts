import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.params.id);
  }

  ngOnInit() {
  }

  save(): void {
  }
}
