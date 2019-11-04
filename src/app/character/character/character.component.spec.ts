import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterComponent } from './character.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CharacterService } from '../character.service';
import { CharacterServiceStub } from '../character.service.stub';
import { Character } from '../model/character';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let characterServiceStub;

  beforeEach(async(() => {
    characterServiceStub = new CharacterServiceStub();
    jest.spyOn(characterServiceStub, 'read');

    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: '3' })} },
        { provide: CharacterService, useValue: characterServiceStub }
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

  it('should load the character with the ID provided via path param "id" using CharacterService and use data to fill the form', () => {
    // GIVEN
    // id kommt über ActivatedRoute rein und wird für Service-Call verwendet
    const testCharacter = TEST_CHARACTER;
    expect(characterServiceStub.read).toHaveBeenCalledWith(3);

    // WHEN
    characterServiceStub.responseSub$.next(TEST_CHARACTER);

    // THEN
    expect(component.form.getRawValue()).toEqual(TEST_CHARACTER);
  });

  const TEST_CHARACTER: Character =     {
    "id": 1,
    "name": "",
    "culture": "Braavosi"
  };
});
