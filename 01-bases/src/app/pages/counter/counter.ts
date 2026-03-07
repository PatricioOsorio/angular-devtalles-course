import { Component, signal } from '@angular/core';
import { NgIf } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  protected readonly counter = signal(0);

  protected increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
