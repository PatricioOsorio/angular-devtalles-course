import { Component, signal } from '@angular/core';

const INITIAL_VALUE = 10;

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  readonly counter = signal(INITIAL_VALUE);

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  resetCounter() {
    this.counter.set(INITIAL_VALUE);
  }
}
