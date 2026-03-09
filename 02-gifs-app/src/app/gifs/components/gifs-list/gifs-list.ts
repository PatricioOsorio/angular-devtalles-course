import { Component, input } from '@angular/core';

import { GifsListItem } from '@app/gifs/components/gifs-list-item/gifs-list-item';
import { IGif } from '@app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  readonly gifs = input.required<IGif[]>();
}
