import { ICountryVM } from '../interfaces/country.interface';
import { CountryResponse } from '../interfaces/country.response';

export class CountryMapper {
  static toCountryVM(countryResponse: CountryResponse): ICountryVM {
    return {
      name: countryResponse.translations["spa"]?.official ?? countryResponse.name?.common ?? 'N/A',
      capital: countryResponse.capital?.[0] ?? 'N/A',
      code: countryResponse.cca3,
      population: countryResponse.population ?? 0,
      flag: countryResponse.flags.png,
      region: countryResponse.region ?? 'N/A',
      subregion: countryResponse.subregion ?? 'N/A',
      borders: countryResponse.borders ?? [],
      area: countryResponse.area ?? 0,
      tld: countryResponse.tld?.[0] ?? '',
      continents: countryResponse.continents ?? [],
      timezones: countryResponse.timezones ?? [],
      independent: countryResponse.independent ?? false,
      unMember: countryResponse.unMember ?? false,
      mapUrl: countryResponse.maps?.googleMaps ?? '',
      languages: Object.values(countryResponse.languages || {} as any),
      currencies: Object.values(countryResponse.currencies || {} as any).map((c: any) => `${c.name} (${c.symbol})`),
      latlng: countryResponse.latlng || [],
      status: countryResponse.status ?? 'N/A',
      drivingSide: countryResponse.car?.side ?? 'N/A',
      postalCodeFormat: countryResponse.postalCode?.format,
    };
  }

  static toCountryVMs(countryResponses: CountryResponse[]): ICountryVM[] {
    return countryResponses.map(this.toCountryVM);
  }
}
