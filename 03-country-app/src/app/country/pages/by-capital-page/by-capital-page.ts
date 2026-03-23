import { Component, inject, signal } from '@angular/core';

import { CountryTable, ICountryRow } from '@app/country/components/country-table/country-table';
import { CountrySearchInput } from '@app/country/components/country-search-input/country-search-input';
import { CountryService } from '@app/country/services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [CountryTable, CountrySearchInput],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export default class ByCapitalPage {
  readonly countryService = inject(CountryService);

  readonly results = signal<readonly ICountryRow[]>([]);

  onSearch(query: string) {
    console.log(query);
    this.countryService.searchByCapital(query).subscribe((countries) => console.log(countries));
  }
}
