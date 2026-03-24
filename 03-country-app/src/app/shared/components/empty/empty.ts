import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty',
  imports: [RouterLink],
  templateUrl: './empty.html',
  styleUrl: './empty.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Empty {
  readonly badge = input('Sin resultados');
  readonly title = input('No encontramos coincidencias');
  readonly description = input(
    'Prueba con otro termino, revisa ortografia o amplia tu busqueda para encontrar mas resultados.',
  );

  readonly actionLabel = input('Volver al inicio');
  readonly actionLink = input<string | null>('/');
  readonly secondaryActionLabel = input('Buscar por capital');
  readonly secondaryActionLink = input<string | null>(null);

  readonly code = input('EMPTY');
}
