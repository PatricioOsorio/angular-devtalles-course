import { Component, signal } from '@angular/core';
import { CountrySearchInput } from '@app/country/components/country-search-input/country-search-input';
import { CountryTable } from '@app/country/components/country-table/country-table';
import { ICountryVM } from '@app/country/interfaces/country.interface.';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchInput, CountryTable],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export default class ByCountryPage {
  readonly results = signal<ICountryVM[]>([]);

  onSearch(value: string) {
    console.log(value);
  }
}
