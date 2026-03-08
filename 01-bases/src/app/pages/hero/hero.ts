import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

const NAME = 'Iron Man';
const AGE = 45;

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
})
export class Hero {
  readonly name = signal(NAME);
  readonly age = signal(AGE);

  readonly heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  readonly capitalizeName = computed(() => `${this.name().toUpperCase()}`);

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set(NAME);
    this.age.set(AGE);
  }

  changeAge() {
    this.age.set(60);
  }
}
