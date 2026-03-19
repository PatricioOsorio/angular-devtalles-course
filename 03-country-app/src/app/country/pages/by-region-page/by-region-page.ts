import { Component, signal } from '@angular/core';

import { CountryTable, ICountryRow } from '@app/country/components/country-table/country-table';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryTable],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css',
})
export default class ByRegionPage {
  readonly results = signal<readonly ICountryRow[]>([]);
}
