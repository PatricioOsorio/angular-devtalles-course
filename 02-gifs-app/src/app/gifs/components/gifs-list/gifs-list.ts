import { Component, computed, input } from '@angular/core';

import { GifsListItem } from '@app/gifs/components/gifs-list-item/gifs-list-item';
import { IGif } from '@app/gifs/interfaces/gif.interface';
import { cn } from '@app/shared/utils/cn';
import { Loading } from "@app/shared/components/loading/loading";

type IViewState = 'loading' | 'empty' | 'data';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItem, Loading],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  readonly gifs = input<IGif[] | null>();
  readonly class = input<string>();
  readonly isLoading = input<boolean>(false);

  readonly viewState = computed<IViewState>(() => {
    if (this.isLoading()) return 'loading';
    if ((this.gifs()?.length ?? 0) === 0) return 'empty';
    return 'data';
  });

  readonly rootClass = computed(() => {
    return cn('columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4 2xl:columns-5', this.class());
  });
}
