import { effect, Injectable, signal } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '@app/core/storage/storage-keys';

import type { ICharacter } from '@app/interfaces/character';

const INITIAL_CHARACTERS: ICharacter[] = [
  { id: 1, name: 'Goku', power: 9000 },
  { id: 2, name: 'Vegeta', power: 8500 },
  { id: 3, name: 'Gohan', power: 7000 },
  { id: 4, name: 'Piccolo', power: 6000 },
  { id: 5, name: 'Krillin', power: 5000 },
];

function loadFromLocalStorage(): ICharacter[] {
  const characters = localStorage.getItem(LOCAL_STORAGE_KEYS.DRAGONBALL_CHARACTERS);

  if (!characters) return INITIAL_CHARACTERS;

  return JSON.parse(characters);
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  readonly characters = signal<ICharacter[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.DRAGONBALL_CHARACTERS,
      JSON.stringify(this.characters()),
    );
  });

  addCharacter(newCharacter: ICharacter) {
    this.characters.update((c) => [...c, newCharacter]);
  }
}
