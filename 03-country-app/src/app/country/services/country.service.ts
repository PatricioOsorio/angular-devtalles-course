import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, catchError, throwError } from 'rxjs';

import { environment } from '@environments/environment';
import { CountryResponse } from '../interfaces/country.response';
import { ICountryVM } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchBy(endpoint: string): (rawQuery: string) => Observable<ICountryVM[]> {
    return (rawQuery: string) => {
      const query = rawQuery.trim().toLowerCase();

      if (!query) return throwError(() => new Error('Query cannot be empty'));

      return this.http
        .get<CountryResponse[]>(`${environment.countryApiUrl}/${endpoint}/${query}`)
        .pipe(
          map((countries) => CountryMapper.toCountryVMs(countries)),
          catchError(() => {
            return throwError(() => new Error(`Error fetching countries by ${endpoint}`));
          }),
        );
    };
  }

  searchByCapital = this.searchBy('capital');
  searchByCountry = this.searchBy('name');
  searchByAlphaCode = this.searchBy('alpha');
}
