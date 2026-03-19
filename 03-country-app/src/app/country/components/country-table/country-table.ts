import { Component, input } from '@angular/core';

import { TableColumn, Table } from '@app/shared/components/table/table';

export type ICountryRow = {
  code: string;
  flag: string;
  name: string;
  capital: string;
  population: number;
};

@Component({
  selector: 'country-table',
  imports: [Table],
  templateUrl: './country-table.html',
  styles: ``,
})
export class CountryTable {
  readonly rows = input.required<readonly ICountryRow[]>();

  readonly columns: readonly TableColumn<ICountryRow>[] = [
    { key: 'code', header: '#', align: 'center', cellClass: 'font-semibold' },
    { key: 'flag', header: 'Bandera', align: 'center' },
    { key: 'name', header: 'Nombre' },
    { key: 'capital', header: 'Capital' },
    {
      key: 'population',
      header: 'Poblacion',
      align: 'right',
      cell: (row) => row.population.toLocaleString('es-ES'),
    },
  ];
}
