import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'li[app-menu-list-item]',
  imports: [RouterLink, RouterLinkActive],
  host: { class: 'mli__item' },
  templateUrl: './menu-list-item.html',
  styleUrl: './menu-list-item.css',
})
export class MenuListItem {
  readonly label = input<string>();
  readonly routerLink = input<string>();
  readonly ariaLabel = input<string>();
}
