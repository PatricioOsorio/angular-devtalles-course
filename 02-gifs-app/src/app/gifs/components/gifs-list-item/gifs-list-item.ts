import { Component, input } from '@angular/core';

import { IGif } from '@app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  styles: ``,
})
export class GifsListItem {
  readonly gif = input.required<IGif>();
}
