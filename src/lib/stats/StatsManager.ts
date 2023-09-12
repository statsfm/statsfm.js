import { ItemResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class StatsManager extends Manager {
  async databaseSize(): Promise<statsfm.DatabaseSize> {
    const res = await this.http.get<ItemResponse<statsfm.DatabaseSize>>(`/stats/database/size`);

    return res.item;
  }
}
