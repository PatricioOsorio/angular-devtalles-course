import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PageHero } from '@app/components/page-hero/page-hero';
import { PipeCard } from '@app/components/pipe-card/pipe-card';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, PageHero, PipeCard],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export default class BasicPage {
  readonly nameLower = signal('PATRICIO');
  readonly nameUpper = signal('PATRICIO');
  readonly fullName = signal('PatricIo OsoRio');
}
