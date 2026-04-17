import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-card',
  imports: [],
  templateUrl: './demo-card.html',
  styleUrl: './demo-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCard {}
