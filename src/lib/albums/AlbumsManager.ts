import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class AlbumsManager extends Manager {
  /**
   * @description Get a album by ID.
   * @param {number} id The ID of the album.
   * @returns {Promise<Album>} Returns a promise with a single {@link Album}.
   */
  async get(id: number): Promise<statsfm.v1.Album> {
    const res = await this.http.get<ItemResponse<statsfm.v1.Album>>(`/albums/${id}`);

    return res.item;
  }

  /**
   * @description Get a list of albums by IDs.
   * @param {string} ids The IDs of the albums
   * * @returns {Promise<Album[]>} Returns a promise with a {@link Album}s.
   */
  async list(ids: number[]): Promise<statsfm.v1.Album[]> {
    const res = await this.http.get<ItemsResponse<statsfm.v1.Album[]>>(`/albums/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.items;
  }

  async getSpotify(id: string): Promise<statsfm.v1.Album> {
    const res = await this.http.get<ItemResponse<statsfm.v1.Album>>(`/albums/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.item;
  }

  async listSpotify(ids: string[]): Promise<statsfm.v1.Album[]> {
    const res = await this.http.get<ItemsResponse<statsfm.v1.Album[]>>(`/albums/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.items;
  }

  /**
   * @description Get a list of tracks on the album.
   * @param {number} id The IDs of the album.
   * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
   */
  async tracks(id: number): Promise<statsfm.v1.Track[]> {
    const res = await this.http.get<ItemsResponse<statsfm.v1.Track[]>>(`/albums/${id}/tracks`);

    return res.items;
  }

  async topListeners(id: number, friendsOnly = false): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopUser[]>>(
      `/albums/${id}/top/listeners`,
      {
        authRequired: true,
        query: friendsOnly === false ? {} : { friends: friendsOnly } // for caching
      }
    );

    return res.items;
  }
}
