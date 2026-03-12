import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import type { IGiphyResponse } from '@app/gifs/interfaces/giphy.response';
import { IGif } from '@app/gifs/interfaces/gif.interface';
import { GifMapper } from '@app/gifs/mapper/gif.mapper';
import { queryClient } from '@app/core/query/query-client';
import { queryKeys } from '@app/core/query/query-keys';

const getSearchHistoryFromCache = (): string[] => {
  const entries = queryClient.getQueriesData({
    queryKey: queryKeys.gifs.searches(),
  });

  return entries
    .map(([queryKey]) => {
      const query = queryKey.at(-1);
      return typeof query === 'string' ? query : undefined;
    })
    .filter((value): value is string => !!value);
};

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  readonly http = inject(HttpClient);

  readonly searchHistory = signal<string[]>(getSearchHistoryFromCache());

  getTrendingGifs(): Observable<IGif[]> {
    return this.http
      .get<IGiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 25,
          rating: 'g',
        },
      })
      .pipe(map((response) => GifMapper.toGifs(response.data)));
  }

  searchGifs(query: string): Observable<IGif[]> {
    return this.http
      .get<IGiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: 25,
          rating: 'g',
        },
      })
      .pipe(
        map(({ data }) => GifMapper.toGifs(data)),
        // TODO: Add history
        tap(() => {
          const normalized = query.trim().toLowerCase();
          if (!normalized) return;

          this.searchHistory.update((history) =>
            [normalized, ...history.filter((item) => item !== normalized)].slice(0, 10),
          );
        }),
      );
  }
}
