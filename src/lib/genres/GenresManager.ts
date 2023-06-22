import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class GenresManager extends Manager {
  async get(tag: string): Promise<statsfm.Genre> {
    const res = await this.http.get<ItemResponse<statsfm.Genre>>(`/genres/${tag}`);

    return res.item;
  }

  async artists(id: string): Promise<statsfm.Artist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Artist[]>>(`/genres/${id}/artists`);

    return res.items;
  }
}
