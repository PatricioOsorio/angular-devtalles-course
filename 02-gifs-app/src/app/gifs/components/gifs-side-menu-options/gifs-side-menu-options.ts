import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import { IMenuItem } from '@app/gifs/interfaces/menu.interface';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, LucideAngularModule, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
})
export class GifsSideMenuOptions {
  readonly menuOptions = input.required<IMenuItem[]>();
}
