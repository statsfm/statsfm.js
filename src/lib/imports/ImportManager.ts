import { Track } from '../../interfaces';
import Manager from '../Manager';

export default class ChartsManager extends Manager {
  changeMatch(streamId: string): Promise<Track[]> {
    return this.http.get<Track[]>(`/imports/am/change-match/${streamId}`, { authRequired: true });
  }

  setNewMatch(streamId: string, newMatch: string): Promise<boolean> {
    return this.http.get<boolean>(`/imports/am/set-new-match/${streamId}/${newMatch}`, {
      authRequired: true
    });
  }
}
