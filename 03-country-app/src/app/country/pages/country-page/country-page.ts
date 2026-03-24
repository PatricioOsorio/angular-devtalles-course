import { ActivatedRoute } from '@angular/router';
import { Component, computed, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DecimalPipe, UpperCasePipe } from '@angular/common';

import { CountryService } from '@app/country/services/country.service';
import { Empty } from '@app/shared/components/empty/empty';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { IViewState } from '@app/shared/interfaces/view-state.interface';
import { Loading } from '@app/shared/components/loading/loading';
import { NotFound } from '@app/shared/components/not-found/not-found';
import { queryKeys } from '@app/core/query/query-keys';
import { ToastService } from '@app/shared/services/toast.service';

@Component({
  selector: 'app-country-page',
  imports: [DecimalPipe, UpperCasePipe, Loading, NotFound, Empty],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export default class CountryPage {
  readonly countryService = inject(CountryService);
  readonly toastService = inject(ToastService);

  readonly countryCode = inject(ActivatedRoute).snapshot.params['code'];

  readonly countryQuery = injectQuery(() => ({
    queryKey: queryKeys.country.byAlphaCode(this.countryCode),
    queryFn: () => firstValueFrom(this.countryService.searchByAlphaCode(this.countryCode)),
  }));

  readonly viewState = computed<IViewState>(() => {
    if (this.countryQuery.isLoading()) return 'loading';
    if (this.countryQuery.isError()) return 'error';
    if (this.countryQuery.isSuccess() && !this.countryQuery.data()) return 'empty';
    return 'data';
  });
}
