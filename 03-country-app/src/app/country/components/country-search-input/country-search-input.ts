import { Component, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {
  readonly searched = output<string>();

  onSearch(value: string) {
    this.searched.emit(value);
  }
}
