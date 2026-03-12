import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-gif-history-p age',
  imports: [JsonPipe],
  templateUrl: './gif-history-page.html',
})
export default class GifHistoryPage {
  readonly query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));
}
