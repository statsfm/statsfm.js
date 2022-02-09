import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class TracksManager extends Manager {
  /**
   * @description Get a track by ID.
   * @param {number} id The ID of the track.
   * @returns {Promise<Track>} Returns a promise with a single {@link Track}.
   */
  async get(id: number): Promise<statsfm.Track> {
    const res = await this.http.get(`/tracks/${id}`);

    return res.data.item;
  }

  /**
   * @description Get a list of tracks by IDs.
   * @param {number} ids The IDs of the tracks.
   * @returns {Promise<Track[]>} Returns a promise with a single {@link Track}.
   */
  async list(ids: number[]): Promise<statsfm.Track[]> {
    const res = await this.http.get(`/tracks/list?ids=${ids.join(',')}`);

    return res.data.items;
  }
}
