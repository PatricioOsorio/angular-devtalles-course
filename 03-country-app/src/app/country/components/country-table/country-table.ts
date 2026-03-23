import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, input, TemplateRef, viewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Table, TableCellTemplateContext, TableColumn } from '@app/shared/components/table/table';
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
  readonly errorMessage = input('');

  readonly infoCell = viewChild<TemplateRef<TableCellTemplateContext<ICountryVM>>>('infoCell');

  private router = inject(Router);
  private decimalPipe = new DecimalPipe('en-US');


  readonly columns = computed<TableColumn<ICountryVM>[]>(() => [
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
      cellHtml: (row) =>
        `<span class="badge badge-primary">${this.decimalPipe.transform(row.population)}</span>`,
    },
    {
      header: 'Más info',
      key: 'info',
      cellTemplate: this.infoCell(),
      align: 'center',
    },
  ]);

  readonly hasRows = computed(() => this.rows().length > 0);

  goToCountry(code: string): void {
    void this.router.navigate(['/country/by', code]);
  }
}
