import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, TemplateRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { Loading } from '../loading/loading';

type TableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TableAlign = 'left' | 'center' | 'right';
type CellValue = string | number | boolean | null | undefined;
type HtmlValue = string | SafeHtml | null | undefined;

export type TableCellTemplateContext<T extends Record<string, unknown>> = {
  $implicit: T;
  rowIndex: number;
};

export type TableColumn<T extends Record<string, unknown>> = {
  key: Extract<keyof T, string> | string;
  header: string;
  cell?: (row: T, rowIndex: number) => CellValue;
  cellHtml?: (row: T, rowIndex: number) => HtmlValue;
  cellTemplate?: TemplateRef<TableCellTemplateContext<T>>;
  align?: TableAlign;
  headerClass?: string;
  cellClass?: string;
};

@Component({
  selector: 'app-table',
  imports: [Loading, NgTemplateOutlet],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table<T extends Record<string, unknown> = Record<string, unknown>> {
  readonly columns = input.required<readonly TableColumn<T>[]>();
  readonly rows = input<readonly T[]>([]);
  readonly caption = input<string>('');
  readonly size = input<TableSize>('md');
  readonly zebra = input(true);
  readonly pinRows = input(false);
  readonly pinCols = input(false);
  readonly emptyMessage = input('Sin resultados');
  readonly rowTrackBy = input<(row: T, rowIndex: number) => string | number>((_, i) => i);
  readonly isLoading = input(false);

  readonly tableClass = computed(() => {
    const classes = ['dt__table', `dt__table--${this.size()}`];
    if (this.zebra()) classes.push('dt__table--zebra');
    if (this.pinRows()) classes.push('dt__table--pin-rows');
    if (this.pinCols()) classes.push('dt__table--pin-cols');
    return classes.join(' ');
  });

  getCellValue(row: T, col: TableColumn<T>, rowIndex: number): string {
    const value = col.cell
      ? col.cell(row, rowIndex)
      : (row as Record<string, unknown>)[String(col.key)];

    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'boolean') return value ? 'Si' : 'No';
    return String(value);
  }

  getCellHtml(row: T, col: TableColumn<T>, rowIndex: number): HtmlValue {
    return col.cellHtml?.(row, rowIndex) ?? null;
  }

  getCellTemplateContext(row: T, rowIndex: number): TableCellTemplateContext<T> {
    return { $implicit: row, rowIndex };
  }

  hasTemplate(col: TableColumn<T>): boolean {
    return !!col.cellTemplate;
  }

  hasHtml(col: TableColumn<T>): boolean {
    return typeof col.cellHtml === 'function';
  }

  isAlignCenter(col: TableColumn<T>): boolean {
    return col.align === 'center';
  }

  isAlignRight(col: TableColumn<T>): boolean {
    return col.align === 'right';
  }
}
