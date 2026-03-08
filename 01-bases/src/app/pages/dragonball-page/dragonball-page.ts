import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

export interface ICharacter {
  id: number;
  name: string;
  power: number;
}

const INITIAL_CHARACTERS: ICharacter[] = [
  { id: 1, name: 'Goku', power: 9000 },
  { id: 2, name: 'Vegeta', power: 8500 },
  { id: 3, name: 'Gohan', power: 7000 },
  { id: 4, name: 'Piccolo', power: 6000 },
  { id: 5, name: 'Krillin', power: 5000 },
];

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  readonly characters = signal<ICharacter[]>(INITIAL_CHARACTERS);

  readonly name = signal('gohan');
  readonly power = signal(1000);

  handleInputName($event: Event) {
    this.name.set(($event.target as HTMLInputElement).value);
  }

  handleInputPower($event: Event) {
    this.power.set(Number(($event.target as HTMLInputElement).value));
  }

  handleAddCharacter() {
    this.characters.update((c) => [
      ...c,
      { id: +new Date(), name: this.name(), power: this.power() },
    ]);
  }
}
