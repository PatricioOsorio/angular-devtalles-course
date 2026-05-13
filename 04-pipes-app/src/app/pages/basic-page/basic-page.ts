import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { PageHero } from '@app/components/page-hero/page-hero';
import { PipeCard } from '@app/components/pipe-card/pipe-card';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, PageHero, PipeCard, DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
  readonly nameLower = signal('PATRICIO');
  readonly nameUpper = signal('PATRICIO');
  readonly fullName = signal('PatricIo OsoRio');

  readonly customDate = signal(new Date());

  readonly tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });
}
