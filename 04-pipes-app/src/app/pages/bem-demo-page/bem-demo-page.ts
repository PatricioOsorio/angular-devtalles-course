import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DemoCard } from '../../components/demo-card/demo-card';

@Component({
  selector: 'app-bem-demo-page',
  imports: [DemoCard],
  templateUrl: './bem-demo-page.html',
  styleUrl: './bem-demo-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BemDemoPage {}
