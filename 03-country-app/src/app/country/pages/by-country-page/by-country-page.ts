import { Component, inject, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { Router, ActivatedRoute } from '@angular/router';

import { CountrySearchInput } from '@app/country/components/country-search-input/country-search-input';
import { CountryService } from '@app/country/services/country.service';
import { CountryTable } from '@app/country/components/country-table/country-table';
import { queryKeys } from '@app/core/query/query-keys';
import { ToastService } from '@app/shared/services/toast.service';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchInput, CountryTable],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export default class ByCountryPage implements OnInit {
  readonly countryService = inject(CountryService);
  readonly toastService = inject(ToastService);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  readonly searchTerm = signal('');

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const query = params.get('q') ?? '';
      this.searchTerm.set(query);
    });
  }

  readonly countryQuery = injectQuery(() => {
    const term = this.searchTerm().trim();

    return {
      queryKey: queryKeys.country.byName(term),
      queryFn: () => firstValueFrom(this.countryService.searchByCountry(term)),
      enabled: term.length > 0,
    };
  });

  onSearch(query: string) {
    this.handleSearch(query);
  }

  onSearchDebounced(query: string) {
    this.handleSearch(query);
  }

  private handleSearch(query: string) {
    const term = query.trim();

    if (term === this.searchTerm()) {
      return this.toastService.warning(
        'El término de búsqueda es el mismo que el actual. Por favor, ingresa un término diferente para obtener nuevos resultados.',
      );
    }

    this.router.navigate(['/search/by-country'], {
      queryParams: { q: term },
      replaceUrl: true,
    });
  }
}
