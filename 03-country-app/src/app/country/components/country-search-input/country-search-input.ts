import { Component, effect, input, OnDestroy, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  styleUrl: './country-search-input.css',
})
export class CountrySearchInput implements OnDestroy {
  readonly initialValue = input<string>('');
  readonly textSearch = input<string>('Buscar');
  readonly textPlaceholder = input<string>('Ejemplo: Madrid');
  readonly textDescription = input<string>(
    'Escribe lo que quieras buscar para obtener resultados mas precisos, de forma rapida y sin friccion.',
  );
  readonly debounceTime = input<number>(3000);

  readonly searched = output<string>();
  readonly valueChanged = output<string>();

  readonly inputValue = signal<string>('');

  private debounceTimeout?: ReturnType<typeof setTimeout>;

  syncInitialValue = effect(() => {
    this.inputValue.set(this.initialValue());
  });

  onTyping(value: string) {
    this.inputValue.set(value);

    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      const term = value.trim();
      if (!term) return;

      this.valueChanged.emit(term);
    }, this.debounceTime());
  }

  onSubmit(value: string) {
    this.inputValue.set(value);

    const term = value.trim();
    if (!term) return;

    this.searched.emit(term);
  }

  ngOnDestroy() {
    clearTimeout(this.debounceTimeout);
  }
}
