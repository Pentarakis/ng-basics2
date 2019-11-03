import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CHARACTERS } from '../../../../data';
import { CharacterService } from '../character.service';
import { CharacterServiceStub } from '../character.service.stub';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let characterService;

  beforeEach(async(() => {
    characterService = new CharacterServiceStub();
    jest.spyOn(characterService, 'read');

    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
      imports: [MatTableModule, MatButtonModule, RouterTestingModule],
      providers: [
        { provide: CharacterService, useValue: characterService }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    characterService.readAllSub$.next(CHARACTERS);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render MatTable', () => {
    expect(fixture).toMatchSnapshot(); // This is the snapshot validation
  });
});
