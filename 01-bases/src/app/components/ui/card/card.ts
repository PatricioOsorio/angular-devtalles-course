import { Component, computed, input } from '@angular/core';

type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type CardTone = 'base' | 'primary' | 'neutral';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
})
export class AppCard {
  title = input.required<string>();
  description = input<string>('');

  imageUrl = input<string | null>(null);
  imageAlt = input<string>('Card image');

  size = input<CardSize>('md');
  tone = input<CardTone>('base');

  bordered = input(false);
  dashed = input(false);
  side = input(false);
  imageFull = input(false);
  centered = input(false);
  shadow = input(true);

  cardClasses = computed(() => {
    const classes = ['card', 'w-full', 'border-base-300', 'border', 'shadow-lg'];

    if (this.shadow()) classes.push('shadow-sm');
    if (this.bordered()) classes.push('card-border');
    if (this.dashed()) classes.push('card-dash');
    if (this.side()) classes.push('card-side');
    if (this.imageFull()) classes.push('image-full');

    switch (this.size()) {
      case 'xs':
        classes.push('card-xs');
        break;
      case 'sm':
        classes.push('card-sm');
        break;
      case 'md':
        classes.push('card-md');
        break;
      case 'lg':
        classes.push('card-lg');
        break;
      case 'xl':
        classes.push('card-xl');
        break;
    }

    switch (this.tone()) {
      case 'primary':
        classes.push('bg-primary', 'text-primary-content');
        break;
      case 'neutral':
        classes.push('bg-neutral', 'text-neutral-content');
        break;
      default:
        classes.push('bg-base-100');
        break;
    }

    return classes.join(' ');
  });

  bodyClasses = computed(() => {
    const classes = ['card-body'];
    if (this.centered()) {
      classes.push('items-center', 'text-center');
    }
    return classes.join(' ');
  });
}
