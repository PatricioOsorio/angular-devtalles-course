import { Component } from '@angular/core';
import { GifsList } from '@app/gifs/components/gifs-list/gifs-list';

export interface IGif {
  id: number;
  title: string;
  url: string;
}

@Component({
  selector: 'trending-page',
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {}
