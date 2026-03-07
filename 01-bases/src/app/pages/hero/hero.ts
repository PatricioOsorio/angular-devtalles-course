import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

const NAME = 'Iron Man';
const AGE = 45;
@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly name = signal(NAME);
  readonly age = signal(AGE);

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old.`;
  }

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
