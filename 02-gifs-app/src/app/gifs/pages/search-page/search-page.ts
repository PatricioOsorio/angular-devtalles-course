import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { queryKeys } from '@app/core/query/query-keys';
import { GifsList } from '@app/gifs/components/gifs-list/gifs-list';
import { GifsService } from '@app/gifs/services/gifs/gifs.service';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  readonly gifsService = inject(GifsService);

  readonly searchQuery = injectQuery(() => ({
    queryKey: queryKeys.gifs.search('javascript'),
    queryFn: () => firstValueFrom(this.gifsService.searchGifs('javascript')),
  }));

  onSearch(query: string) {
    console.log({ query });
  }
}
