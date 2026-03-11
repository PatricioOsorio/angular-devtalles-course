import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';

import { environment } from '@environments/environment';
import type { IGiphyResponse, IGyphy } from '@app/gifs/interfaces/giphy.response';
import { IGif } from '@app/gifs/interfaces/gif.interface';
import { GifMapper } from '@app/gifs/mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  readonly http = inject(HttpClient);
  readonly trendingGifs = signal<IGif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<IGiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 25,
          rating: 'g',
        },
      })
      .pipe(map((response) => GifMapper.toGifs(response.data)))
      .subscribe({
        next: (gifs) => this.trendingGifs.set(gifs),
        error: (error) => console.error('Error loading gifs:', error),
      });
  }
}
