import * as statsfm from '../../interfaces/statsfm';
import { RequestInitWithQuery } from '../../interfaces/Request';
import Manager from '../Manager';

export default class SearchManager extends Manager {
  async search(query: string, options?: RequestInitWithQuery): Promise<statsfm.Object[]> {
    const res = await this.http.get(`/stats/database/size`, options);

    return res.data.items;
  }
}
