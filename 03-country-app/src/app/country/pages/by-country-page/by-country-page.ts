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
      enabled: this.searchTerm().length > 0,
    };
  });

  onSearch(value: string) {
    const term = value.trim();

    if (!term) {
      this.toastService.error('Por favor ingresa el nombre de un país para realizar la búsqueda.');
      return;
    }

    this.router.navigate(['/search/by-country'], {
      queryParams: { q: term },
    });
  }
}
