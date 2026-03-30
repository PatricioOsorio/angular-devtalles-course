import { Component, input, ViewEncapsulation } from '@angular/core';

import { ITopMenuItem } from '@app/country/interfaces/top-menu.interface';
import { MenuListItem } from '../menu-list-item/menu-list-item';

@Component({
  selector: 'app-menu-list',
  imports: [MenuListItem],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.css',
  encapsulation: ViewEncapsulation.None,
})
export class MenuList {
  readonly values = input.required<ITopMenuItem[]>();
}
