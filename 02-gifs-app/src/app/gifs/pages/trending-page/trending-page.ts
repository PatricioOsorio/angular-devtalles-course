import { Component, computed, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';

import { GifsList } from '@app/gifs/components/gifs-list/gifs-list';
import { GifsService } from '@app/gifs/services/gifs/gifs.service';
import { queryKeys } from '@app/core/query/query-keys';

@Component({
  selector: 'trending-page',
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  readonly gifsService = inject(GifsService);

  readonly gifsInfinity = injectInfiniteQuery(() => ({
    queryKey: queryKeys.gifs.trendingInfinity(),
    queryFn: ({ pageParam }) => {
      const offset = pageParam ?? 0;
      return firstValueFrom(this.gifsService.getTrendingInfinityGifs(25, offset));
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
    getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
  }));

  readonly gifs = computed(() => this.gifsInfinity.data()?.pages.flatMap((page) => page.gifs));

  loadMore() {
    if (!this.gifsInfinity.hasNextPage()) return;
    if (this.gifsInfinity.isFetchingNextPage()) return;
    this.gifsInfinity.fetchNextPage();
  }
}
