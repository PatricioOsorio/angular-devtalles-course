import { IGif } from '../interfaces/gif.interface';
import { IGyphy } from '../interfaces/giphy.response';

export class GifMapper {
  static toGif(giphyGif: IGyphy): IGif {
    return {
      id: giphyGif.id,
      title: giphyGif.title,
      url: giphyGif.images.fixed_width.url,
    };
  }

  static toGifs(giphyGifs: IGyphy[]): IGif[] {
    return giphyGifs.map(this.toGif);
  }

}
