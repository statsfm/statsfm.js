import * as statsfm from '../../interfaces/statsfm';
import { QueryWithPaging } from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class SearchManager extends Manager {
    search(query: string, type: statsfm.SearchTypes[], options?: QueryWithPaging): Promise<statsfm.SearchResults>;
    searchElastic(query: string, type: statsfm.SearchTypes[], options?: QueryWithPaging): Promise<statsfm.SearchResults>;
}
