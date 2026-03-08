import { Component, signal } from '@angular/core';

import { AppCard } from '@app/components/ui/card/card';
import { ICharacter } from '@app/interfaces/character';
import { CharacterList } from '@app/components/character-list/character-list';
import { CharacterForm } from '@app/components/character-form/character-form';

const INITIAL_CHARACTERS: ICharacter[] = [
  { id: 1, name: 'Goku', power: 9000 },
  { id: 2, name: 'Vegeta', power: 8500 },
  { id: 3, name: 'Gohan', power: 7000 },
  { id: 4, name: 'Piccolo', power: 6000 },
  { id: 5, name: 'Krillin', power: 5000 },
];

@Component({
  selector: 'app-dragonball-page',
  imports: [AppCard, CharacterList, CharacterForm],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  readonly characters = signal<ICharacter[]>(INITIAL_CHARACTERS);

  addCharacter(newCharacter: ICharacter) {
    this.characters.update((c) => [...c, newCharacter]);
  }
}
