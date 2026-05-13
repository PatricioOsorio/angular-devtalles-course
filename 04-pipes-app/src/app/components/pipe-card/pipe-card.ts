import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-pipe-card',
  imports: [],
  templateUrl: './pipe-card.html',
  styleUrl: './pipe-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pc',
    role: 'listitem',
  },
})
export class PipeCard {
  readonly title = input.required<string>();
  readonly badge = input.required<string>();
  readonly codeLabel = input.required<string>();
  readonly value = input.required<string | number | null>();
  readonly description = input.required<string | number | null>();
  readonly tone = input<'default' | 'secondary' | 'accent'>('default');
}
