import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ICharacter } from '@app/interfaces/character';

@Component({
  selector: 'app-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<ICharacter[]>();
}
