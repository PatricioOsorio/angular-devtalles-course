import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { GifsList } from '@app/gifs/components/gifs-list/gifs-list';
import { IGif } from '@app/gifs/interfaces/gif.interface';
import { GifsService } from '@app/gifs/services/gifs/gifs.service';

const GIFS = [
  {
    id: '1',
    title: 'Gifs 1',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  },
  {
    id: '2',
    title: 'Gifs 2',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  },
  {
    id: '3',
    title: 'Gifs 3',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  },
  {
    id: '4',
    title: 'Gifs 4',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  },
  {
    id: '5',
    title: 'Gifs 5',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  },
  {
    id: '6',
    title: 'Gifs 6',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
  },
  {
    id: '7',
    title: 'Gifs 7',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  },
  {
    id: '8',
    title: 'Gifs 8',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
  },
  {
    id: '9',
    title: 'Gifs 9',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
  },
  {
    id: '10',
    title: 'Gifs 10',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
  },
  {
    id: '11',
    title: 'Gifs 11',
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
  },
];

@Component({
  selector: 'trending-page',
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  readonly gifs: IGif[] = GIFS;

  readonly gifsService = inject(GifsService);

  readonly gifsQuery = injectQuery(() => ({
    queryKey: ['trending-gifs'],
    queryFn: () => firstValueFrom(this.gifsService.getTrendingGifs()),
  }));

}
