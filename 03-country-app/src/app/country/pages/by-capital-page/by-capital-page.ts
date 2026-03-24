import { Component, inject, OnInit, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ActivatedRoute, Router } from '@angular/router';

import { CountrySearchInput } from '@app/country/components/country-search-input/country-search-input';
import { CountryService } from '@app/country/services/country.service';
import { CountryTable } from '@app/country/components/country-table/country-table';
import { queryKeys } from '@app/core/query/query-keys';
import { ToastService } from '@app/shared/services/toast.service';

@Component({
  selector: 'by-capital-page',
  imports: [CountryTable, CountrySearchInput],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export default class ByCapitalPage implements OnInit {
  readonly countryService = inject(CountryService);
  readonly toastService = inject(ToastService);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  readonly searchTerm = signal<string>('');

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const query = params.get('q') ?? '';
      this.searchTerm.set(query);
    });
  }

  readonly countryQuery = injectQuery(() => {
    const term = this.searchTerm().trim();

    return {
      queryKey: queryKeys.country.byCapital(term),
      queryFn: () => firstValueFrom(this.countryService.searchByCapital(term)),
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

    this.router.navigate(['/search/by-capital'], {
      queryParams: { q: term },
      replaceUrl: true,
    });
  }
}
