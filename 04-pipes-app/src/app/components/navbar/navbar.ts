import { Component } from '@angular/core';
import { routes } from '@app/app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly routes = routes
    .filter((route) => route.path !== '**' && Boolean(route.title) && Boolean(route.path))
    .map((route) => ({
      title: route.title ?? '',
      path: route.path ?? '',
    }));
}
