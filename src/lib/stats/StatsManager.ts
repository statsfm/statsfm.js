import { RequestInitWithQuery } from '../../interfaces/Request';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class StatsManager extends Manager {
  async databaseSize(options?: RequestInitWithQuery): Promise<statsfm.TotalSize> {
    const res = await this.http.get(`/stats/database/size`, options);

    return res.data.item as statsfm.TotalSize;
  }
}
