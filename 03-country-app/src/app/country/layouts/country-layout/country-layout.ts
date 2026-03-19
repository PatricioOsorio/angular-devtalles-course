import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "@app/country/components/country-top-menu/country-top-menu";

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './country-layout.html',
  styleUrl: './country-layout.css',
})
export class CountryLayout {}
