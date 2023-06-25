import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class RecordsManager extends Manager {
  async getArtistRecords(recordId: number): Promise<statsfm.StatsFMRecord> {
    const response = await this.http.get<ItemResponse<statsfm.StatsFMRecord>>(
      `/records/artists/${recordId}`
    );
    return response.item;
  }

  async listArtistRecords(recordIds: number[]): Promise<statsfm.StatsFMRecord> {
    const response = await this.http.get<ItemsResponse<statsfm.StatsFMRecord>>(`/records/artists`, {
      query: { ids: recordIds.join(',') }
    });
    return response.items;
  }

  async getArtistRecordHistory(recordId: number): Promise<statsfm.StatsFMRecord> {
    const response = await this.http.get<ItemsResponse<statsfm.StatsFMRecord>>(
      `/records/artists/${recordId}/history`
    );
    return response.items;
  }
}
