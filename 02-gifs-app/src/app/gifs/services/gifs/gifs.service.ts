import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import type { IGiphyResponse } from '@app/gifs/interfaces/giphy.response';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  readonly http = inject(HttpClient);

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
      .subscribe(console.log);
  }
}
