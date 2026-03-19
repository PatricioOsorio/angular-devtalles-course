import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  styleUrl: './country-search-input.css',
})
export class CountrySearchInput {
  readonly textSearch = input<string>('Buscar');
  readonly textPlaceholder = input<string>('Ejemplo: Madrid');
  readonly textDescription = input<string>(
    'Escribe lo que quieras buscar para obtener resultados mas precisos, de forma rapida y sin friccion.',
  );

  readonly searched = output<string>();

  onSearch(value: string) {
    this.searched.emit(value);
  }
}
