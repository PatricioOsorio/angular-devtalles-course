import { Component, inject, signal } from '@angular/core';
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

  readonly searchTerm = signal('');

  readonly searchQuery = injectQuery(() => ({
    queryKey: queryKeys.gifs.search(this.searchTerm()),
    queryFn: () => firstValueFrom(this.gifsService.searchGifs(this.searchTerm())),
  }));

  onSearch(query: string) {
    this.searchTerm.set(query);
  }
}
