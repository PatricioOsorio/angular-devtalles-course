import { Component, signal } from '@angular/core';
import { ICharacter } from '@app/interfaces/character';

@Component({
  selector: 'app-character-form',
  imports: [],
  templateUrl: './character-form.html',
})
export class CharacterForm {
  readonly name = signal<string>('');
  readonly power = signal<number>(0);

  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name.set(value);
  }

  onPowerInput(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.power.set(value);
  }

  onReset() {
    this.name.set('');
    this.power.set(0);
  }

  onAddCharacter() {
    const isValid = this.name() && this.power() && this.power() > 0;

    if (!isValid) return;

    const newCharacter: ICharacter = {
      id: +new Date(),
      name: this.name(),
      power: this.power(),
    };

    console.log(newCharacter);

    // this.characters.update((c) => [...c, newCharacter]);

    this.onReset();
  }
}
