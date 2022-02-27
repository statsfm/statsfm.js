import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class GenresManager extends Manager {
  async get(id: string): Promise<statsfm.Genre> {
    const res = await this.http.get(`/genres/${id}`);

    return res.data.item as statsfm.Genre;
  }

  async artists(id: string): Promise<statsfm.Artist[]> {
    const res = await this.http.get(`/genres/${id}/artists`);

    return res.data.items as statsfm.Artist[];
  }
}
