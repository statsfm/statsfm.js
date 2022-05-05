import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class AlbumsManager extends Manager {
  /**
   * @description Get an album by ID.
   * @param {T} id The ID of the album.
   * @param {statsfm.QueryWithIdType} options Request options.
   * @returns {Promise<statsfm.Album>} Returns a promise with a single {@link statsfm.Album Album}.
   */
  async get<T extends number | string>(
    id: T,
    ...options: T extends number ? [options?: undefined] : [options: statsfm.QueryWithIdType]
  ): Promise<statsfm.Album> {
    const res = await this.http.get(`/albums/${id}`, {
      query: options[0]
    });

    return res.data.item;
  }

  /**
   * @description Get a list of albums by IDs.
   * @param {T} ids The IDs of the albums.
   * @param {statsfm.QueryWithIdType} options Request options.
   * @returns {Promise<statsfm.Album[]>} Returns a promise with {@link statsfm.Album Albums}.
   */
  async list<T extends number[] | string[]>(
    ids: T,
    ...options: T extends number ? [options?: undefined] : [options: statsfm.QueryWithIdType]
  ): Promise<statsfm.Album[]> {
    const res = await this.http.get(`/albums/list`, {
      query: {
        ids: ids.join(','),
        ...options[0]
      }
    });

    return res.data.items;
  }

  /**
   * @description Get a list of tracks on the album.
   * @param {number} id The ID of the album.
   * @returns {Promise<Track[]>} Returns a promise with {@link statsfm.Track Tracks}.
   */
  async tracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get(`/albums/${id}/tracks`);

    return res.data.items as statsfm.Track[];
  }
}
