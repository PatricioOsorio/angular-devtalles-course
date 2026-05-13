import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'app-page-hero',
	templateUrl: './page-hero.html',
	styleUrl: './page-hero.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'ph',
	},
})
export class PageHero {
	readonly eyebrow = input.required<string>();
	readonly title = input.required<string>();
	readonly lead = input.required<string>();
	readonly meta = input<string>();
	readonly titleId = input('page-hero-title');
}
