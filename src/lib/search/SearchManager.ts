import * as statsfm from '../../interfaces/statsfm';
import { QueryWithPaging } from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class SearchManager extends Manager {
  async search(
    query: string,
    type: statsfm.SearchTypes[],
    options: QueryWithPaging = {}
  ): Promise<statsfm.SearchResults> {
    // TODO: implement paging
    const res = await this.http.get<statsfm.SearchResults>(`/search`, {
      query: {
        query,
        type: type.join(','),
        ...options
      }
    });

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async searchElastic(
    query: string,
    type: statsfm.SearchTypes[],
    options: QueryWithPaging = {}
  ): Promise<statsfm.SearchResults> {
    // TODO: implement paging
    const res = await this.http.get<statsfm.SearchResults>(`/search/elastic`, {
      query: {
        query,
        type: type.join(','),
        ...options
      }
    });

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }
}
