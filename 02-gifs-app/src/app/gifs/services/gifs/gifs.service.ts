import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import type { IGiphyResponse } from '@app/gifs/interfaces/giphy.response';
import { IGif } from '@app/gifs/interfaces/gif.interface';
import { GifMapper } from '@app/gifs/mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  readonly http = inject(HttpClient);

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
}
