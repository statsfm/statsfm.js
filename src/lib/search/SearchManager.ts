import { ItemsResponse } from '../../interfaces';
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
    const res = await this.http.get<ItemsResponse<statsfm.SearchResults>>(`/search`, {
      query: {
        query,
        type: type.join(','),
        ...options
      }
    });

    return res.items;
  }

  async searchElastic(
    query: string,
    type: statsfm.SearchTypes[],
    options: QueryWithPaging = {}
  ): Promise<statsfm.SearchResults> {
    // TODO: implement paging
    const res = await this.http.get<ItemsResponse<statsfm.SearchResults>>(`/search/elastic`, {
      query: {
        query,
        type: type.join(','),
        ...options
      }
    });

    return res.items;
  }
}
