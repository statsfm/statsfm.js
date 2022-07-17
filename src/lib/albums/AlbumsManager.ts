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
    const res = await this.http.get<statsfm.Album[]>(`/albums/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.data.items;
  }

  async getSpotify(id: string): Promise<statsfm.Album> {
    const res = await this.http.get<statsfm.Album>(`/albums/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.data.item;
  }

  async listSpotify(ids: string[]): Promise<statsfm.Album[]> {
    const res = await this.http.get<statsfm.Album[]>(`/albums/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.data.items;
  }

  /**
   * @description Get a list of tracks on the album.
   * @param {number} id The IDs of the album.
   * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
   */
  async tracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get<statsfm.Track[]>(`/albums/${id}/tracks`);

    return res.data.items;
  }

  async topListeners(id: number): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<statsfm.TopUser[]>(`/albums/${id}/listeners/top`);

    return res.data.items;
  }
}
