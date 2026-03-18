import { Component, computed, ElementRef, input, viewChild } from '@angular/core';

import { GifsListItem } from '@app/gifs/components/gifs-list-item/gifs-list-item';
import { IGif } from '@app/gifs/interfaces/gif.interface';
import { Loading } from '@app/shared/components/loading/loading';

type IViewState = 'loading' | 'empty' | 'data';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItem, Loading],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  readonly gifs = input<IGif[] | null>();
  readonly isLoading = input<boolean>(false);
  readonly scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  readonly viewState = computed<IViewState>(() => {
    if (this.isLoading()) return 'loading';
    if ((this.gifs()?.length ?? 0) === 0) return 'empty';
    return 'data';
  });

  onScroll(e: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollDiv;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    console.log({ scrollTop, scrollHeight, clientHeight, isAtBottom });

  }
}
