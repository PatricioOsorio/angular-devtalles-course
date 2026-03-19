import { Component, signal } from '@angular/core';

import { CountryTable, ICountryRow } from '@app/country/components/country-table/country-table';
import { CountrySearchInput } from "@app/country/components/country-search-input/country-search-input";

@Component({
  selector: 'by-capital-page',
  imports: [CountryTable, CountrySearchInput],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export default class ByCapitalPage {
  readonly results = signal<readonly ICountryRow[]>([]);

  onSearch(value: string) {
    console.log(value);
  }
}
