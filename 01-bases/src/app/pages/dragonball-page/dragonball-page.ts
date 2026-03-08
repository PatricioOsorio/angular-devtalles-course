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

  readonly name = signal('');
  readonly power = signal(0);

  handleInputName($event: Event) {
    this.name.set(($event.target as HTMLInputElement).value);
  }

  handleInputPower($event: Event) {
    this.power.set(+($event.target as HTMLInputElement).value);
  }

  handleReset() {
    this.name.set('');
    this.power.set(0);
  }

  handleAddCharacter() {
    const isValid = this.name() && this.power() && this.power() > 0;

    if (!isValid) return;

    this.characters.update((c) => [
      ...c,
      { id: +new Date(), name: this.name(), power: this.power() },
    ]);

    this.handleReset();
  }
}
