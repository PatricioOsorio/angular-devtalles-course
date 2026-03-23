import { ICountryVM } from '../interfaces/country.interface.';
import { CountryResponse } from '../interfaces/country.response';

export class CountryMapper {
  static toCountryVM(countryResponse: CountryResponse): ICountryVM {
    return {
      name: countryResponse.translations['spa']?.official,
      capital: countryResponse.capital?.[0] ?? 'N/A',
      code: countryResponse.cca3,
      population: countryResponse.population,
      flag: countryResponse.flags.png,
    };
  }

  static toCountryVMs(countryResponses: CountryResponse[]): ICountryVM[] {
    return countryResponses.map(this.toCountryVM);
  }
}
