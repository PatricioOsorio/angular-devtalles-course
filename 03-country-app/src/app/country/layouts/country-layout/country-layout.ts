import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "@app/shared/components/footer/footer";
import { TopMenu } from "@app/country/components/top-menu/top-menu";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, Footer, TopMenu],
  templateUrl: './country-layout.html',
})
export class CountryLayout {}
