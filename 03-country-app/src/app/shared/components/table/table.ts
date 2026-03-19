import { Component, computed, input } from '@angular/core';

type TableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TableAlign = 'left' | 'center' | 'right';
type CellValue = string | number | boolean | null | undefined;

export type TableColumn<T extends Record<string, unknown>> = {
  key: Extract<keyof T, string> | string;
  header: string;
  cell?: (row: T, rowIndex: number) => CellValue;
  align?: TableAlign;
  headerClass?: string;
  cellClass?: string;
};

@Component({
  selector: 'app-table',
  imports: [],
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

  readonly tableClass = computed(() => {
    const classes = ['table', `table-${this.size()}`];
    if (this.zebra()) classes.push('table-zebra');
    if (this.pinRows()) classes.push('table-pin-rows');
    if (this.pinCols()) classes.push('table-pin-cols');
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

  isAlignCenter(col: TableColumn<T>): boolean {
    return col.align === 'center';
  }

  isAlignRight(col: TableColumn<T>): boolean {
    return col.align === 'right';
  }
}
