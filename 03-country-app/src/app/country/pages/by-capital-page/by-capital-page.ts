import { Component, inject, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { CountryTable } from '@app/country/components/country-table/country-table';
import { ICountryVM } from '@app/country/interfaces/country.interface.';
import { CountrySearchInput } from '@app/country/components/country-search-input/country-search-input';
import { CountryService } from '@app/country/services/country.service';
import { queryKeys } from '@app/core/query/query-keys';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [CountryTable, CountrySearchInput],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export default class ByCapitalPage {
  readonly countryService = inject(CountryService);

  readonly searchTerm = signal('me');

  readonly countryQuery = injectQuery(() => ({
    queryKey: queryKeys.country.byCapital(this.searchTerm()),
    queryFn: () => firstValueFrom(this.countryService.searchByCapital(this.searchTerm())),
  }));

  onSearch(query: string) {
    if (!query.trim()) return;

    this.searchTerm.set(query);
  }
}
