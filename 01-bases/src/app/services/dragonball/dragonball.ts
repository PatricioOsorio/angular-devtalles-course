import { Injectable, signal } from '@angular/core';

import { ICharacter } from '@app/interfaces/character';

const INITIAL_CHARACTERS: ICharacter[] = [
  { id: 1, name: 'Goku', power: 9000 },
  { id: 2, name: 'Vegeta', power: 8500 },
  { id: 3, name: 'Gohan', power: 7000 },
  { id: 4, name: 'Piccolo', power: 6000 },
  { id: 5, name: 'Krillin', power: 5000 },
];

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  readonly characters = signal<ICharacter[]>(INITIAL_CHARACTERS);

  addCharacter(newCharacter: ICharacter) {
    this.characters.update((c) => [...c, newCharacter]);
  }
}
