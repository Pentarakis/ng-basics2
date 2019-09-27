import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  isCreateMode = true;
  character: Character = new Character();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {

    this.route.params.pipe(first()).toPromise()
      .then(params => {
        const id = params.id;
        if (id !== 'create') {
          this.characterService.read(Number(id))
            .then(response => response.json())
            .catch(() => {
              alert('Communication Error');
              setTimeout(() => {
                this.characterService.read(Number(id))
                  .then(response => response.json())
                  .then(character => this.character = character);
              }, 2000);
            })
            .then(character => this.character = character);
        }

      });
  }

  ngOnInit() {
  }

  save(): void {
  }
}
