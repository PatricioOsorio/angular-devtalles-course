import { Component, input } from '@angular/core';
import { IGif } from '@app/gifs/pages/trending-page/trending-page';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  styles: ``,
})
export class GifsListItem {
  readonly gif = input.required<IGif>();
}
