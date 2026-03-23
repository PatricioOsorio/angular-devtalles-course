import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(rawQuery: string) {
    const query = rawQuery.trim().toLowerCase();

    return this.http.get<any>(`${environment.countryApiUrl}/capital/${query}`);
  }
}
