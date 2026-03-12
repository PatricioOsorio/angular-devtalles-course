import { ActivatedRoute } from '@angular/router';
import { Component, computed, inject } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { toSignal } from '@angular/core/rxjs-interop';

import { GifsList } from "@app/gifs/components/gifs-list/gifs-list";
import { GifsService } from '@app/gifs/services/gifs/gifs.service';
import { Loading } from "@app/shared/components/loading/loading";
import { queryKeys } from '@app/core/query/query-keys';

@Component({
  selector: 'app-gif-history-p age',
  imports: [GifsList, Loading],
  templateUrl: './gif-history-page.html',
})
export default class GifHistoryPage {
  readonly gifsService = inject(GifsService);
  readonly query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  readonly searchQuery = injectQuery(() => ({
    queryKey: queryKeys.gifs.search(this.query()),
    queryFn: () => firstValueFrom(this.gifsService.searchGifs(this.query())),
  }));

  readonly totalResults = computed(() => this.searchQuery.data()?.length ?? 0);

  readonly viewState = computed(() => {
    if (this.searchQuery.isLoading()) return 'loading';
    if (this.totalResults() === 0) return 'empty';
    return 'data';
  });

}
