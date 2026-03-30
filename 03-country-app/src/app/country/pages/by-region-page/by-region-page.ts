import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { queryKeys } from '@app/core/query/query-keys';

import { CountryTable } from '@app/country/components/country-table/country-table';
import { ICountryVM } from '@app/country/interfaces/country.interface';
import { CountryService } from '@app/country/services/country.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

const DEFAULT_REGION = "Africa";

@Component({
  selector: 'app-by-region-page',
  imports: [CountryTable, RouterLinkActive],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css',
})
export default class ByRegionPage {
  readonly results = signal<ICountryVM[]>([]);

  readonly countryService = inject(CountryService);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  private queryParams = toSignal(this.route.queryParamMap);
  readonly selectedRegion = signal<string>(DEFAULT_REGION);

  constructor() {
    const initialRegion = this.route.snapshot.queryParamMap.get('region');

    if (!initialRegion) {
      this.regionSelected(DEFAULT_REGION);
    }

    effect(() => {
      const region = this.queryParams()?.get('region') ?? DEFAULT_REGION;
      this.selectedRegion.set(region);
    });
  }

  readonly regionSelected = (region: string) => {
    this.router.navigate([], {
      queryParams: { region },
      queryParamsHandling: 'merge',
    });
  };

  readonly countryQuery = injectQuery(() => ({
    queryKey: queryKeys.country.byRegion(this.selectedRegion()),
    queryFn: () => firstValueFrom(this.countryService.searchByRegion(this.selectedRegion())),
    enabled: this.selectedRegion().length > 0,
  }))
}
