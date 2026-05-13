import { Component, signal } from '@angular/core';
import { PipeCard } from '@app/components/pipe-card/pipe-card';
import { PageHero } from '@app/components/page-hero/page-hero';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  imports: [PipeCard, PageHero, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css',
})
export default class NumbersPage {
  readonly totalSells = signal(2_334_343.4345);
  readonly percent = signal(0.2);
}
