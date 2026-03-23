import { Component, input } from '@angular/core';

import { TableColumn, Table } from '@app/shared/components/table/table';
import { ICountryVM } from '../../interfaces/country.interface.';

@Component({
  selector: 'country-table',
  imports: [Table],
  templateUrl: './country-table.html',
  styleUrl: './country-table.css',
})
export class CountryTable {
  readonly rows = input.required<ICountryVM[]>();
  readonly isLoading = input(false);

  readonly columns: readonly TableColumn<ICountryVM>[] = [
    { key: 'code', header: 'Código', align: 'center', cellClass: 'font-semibold' },
    {
      key: 'flag',
      header: 'Bandera',
      align: 'center',
      cellHtml: (row) =>
        `<img src="${row.flag}" alt="${row.name} flag" class="w-6 h-4 object-cover"/>`,
    },
    { key: 'name', header: 'Nombre' },
    { key: 'capital', header: 'Capital' },
    {
      key: 'population',
      header: 'Poblacion',
      align: 'right',
      cell: (row) => row.population.toLocaleString('es-ES'),
    },
    {
      header: 'Más info',
      key: 'info',
      align: 'center',
      cellHtml: (row) => `<button class="btn btn-sm btn-primary">Más info</button>`,
    },
  ];
}
