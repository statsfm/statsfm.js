import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class AlbumsManager extends Manager {
  /**
   * @description Get a album by ID.
   * @param {number} id The ID of the album.
   * @returns {Promise<Album>} Returns a promise with a single {@link Album}.
   */
  async get(id: number): Promise<statsfm.Album> {
    const res = await this.http.get(`/albums/${id}`);

    return res.data.item as statsfm.Album;
  }

  /**
   * @description Get a list of albums by IDs.
   * @param {string} ids The IDs of the albums
   * * @returns {Promise<Album[]>} Returns a promise with a {@link Album}s.
   */
  async list(ids: number[]): Promise<statsfm.Album[]> {
    const res = await this.http.get(`/albums/list?ids=${ids.join(',')}`);

    return res.data.items as statsfm.Album[];
  }

  /**
   * @description Get a list of tracks on the album.
   * @param {number} id The IDs of the album.
   * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
   */
  async tracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get(`/albums/${id}/tracks`);

    return res.data.items as statsfm.Track[];
  }
}
