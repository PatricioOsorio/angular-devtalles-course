import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import { GifsSideMenu } from '@app/gifs/components/gifs-side-menu/gifs-side-menu';

@Component({
  selector: 'dashboard-page',
  imports: [RouterOutlet, LucideAngularModule, GifsSideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
