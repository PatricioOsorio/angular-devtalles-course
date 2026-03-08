import { Component, signal } from '@angular/core';

const INITIAL_VALUE = 10;

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter-page.html',
})
export class CounterPage {
  readonly counter = signal(INITIAL_VALUE);

  increaseBy(value: number) {
    this.counter.update((c) => c + value);
  }

  resetCounter() {
    this.counter.set(INITIAL_VALUE);
  }
}
