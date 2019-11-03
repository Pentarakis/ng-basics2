import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { CHARACTERS } from '../../../../data';
import { CharacterService } from '../character.service';
import { CharacterServiceStub } from '../character.service.stub';
import { Character } from '../model/character';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let characterService;

  beforeEach(async(() => {
    characterService = new CharacterServiceStub();
    jest.spyOn(characterService, 'read');

    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: CharacterService, useValue: characterService },
        { provide: ActivatedRoute, useValue: { params: of({ id: '3' })} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the with the ID provided via path param "id" using CharacterService', () => {
    expect(characterService.read).toHaveBeenCalledWith(3);

    // GIVEN
    const character = CHARACTERS[0];
    expect(component.form.getRawValue()).toEqual({
      id: null,
      name: null,
      culture: null
    });

    // WHEN
    characterService.responseSub$.next(character);

    expect(component.form.getRawValue()).toEqual(character);
  });
});
