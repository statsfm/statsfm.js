import Manager from '../Manager';
import * as statsfm from '../../interfaces/statsfm';

export default class ImportManager extends Manager {
  changeMatch(streamId: string): Promise<statsfm.v1.Track[]> {
    return this.http.get<statsfm.v1.Track[]>(`/imports/am/change-match/${streamId}`, {
      authRequired: true
    });
  }

  setNewMatch(streamId: string, newMatch: string): Promise<boolean> {
    return this.http.get<boolean>(`/imports/am/set-new-match/${streamId}/${newMatch}`, {
      authRequired: true
    });
  }
}
