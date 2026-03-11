import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';

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

  readonly gifsQuery = injectQuery(() => ({
    queryKey: queryKeys.gifs.trending(),
    queryFn: () => firstValueFrom(this.gifsService.getTrendingGifs()),
  }));
}
