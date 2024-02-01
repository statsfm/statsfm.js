import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class GenresManager extends Manager {
  async get(tag: string): Promise<statsfm.v1.Genre> {
    const res = await this.http.get<ItemResponse<statsfm.v1.Genre>>(`/genres/${tag}`);

    return res.item;
  }

  async list(tags: string[]): Promise<statsfm.v1.Genre[]> {
    const res = await this.http.get<ItemsResponse<statsfm.v1.Genre[]>>(`/genres`, {
      query: {
        ids: tags.join(',')
      }
    });

    return res.items;
  }

  async artists(id: string): Promise<statsfm.v1.Artist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.v1.Artist[]>>(`/genres/${id}/artists`);

    return res.items;
  }
}
