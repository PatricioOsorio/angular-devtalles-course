import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';

import { environment } from '@environments/environment';
import { CountryResponse } from '../interfaces/country.response';
import { ICountryVM } from '../interfaces/country.interface.';
import { CountryMapper } from '../mapper/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(rawQuery: string): Observable<ICountryVM[]> {
    const query = rawQuery.trim().toLowerCase();

    return this.http
      .get<CountryResponse[]>(`${environment.countryApiUrl}/capital/${query}`)
      .pipe(map((countries) => CountryMapper.toCountryVMs(countries)));
  }
}
