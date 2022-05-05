import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class ArtistsManager extends Manager {
  /**
   * @description Get an artist by ID.
   * @param {T} id The ID of the artist.
   * @param {statsfm.QueryWithIdType} options Request options.
   * @returns {Promise<statsfm.Artist>} Returns a promise with a single {@link statsfm.Artist Artist}.
   */
  async get<T extends number | string>(
    id: T,
    ...options: T extends number ? [options?: undefined] : [options: statsfm.QueryWithIdType]
  ): Promise<statsfm.Artist> {
    const res = await this.http.get(`/artists/${id}`, {
      query: options[0]
    });

    return res.data.item;
  }

  /**
   * @description Get a list of artists by IDs.
   * @param {T} ids The IDs of the artists.
   * @param {statsfm.QueryWithIdType} options Request options.
   * @returns {Promise<statsfm.Artist[]>} Returns a promise with {@link statsfm.Artist Artists}.
   */
  async list<T extends number[] | string[]>(
    ids: T,
    ...options: T extends number ? [options?: undefined] : [options: statsfm.QueryWithIdType]
  ): Promise<statsfm.Artist[]> {
    const res = await this.http.get(`/artists/list`, {
      query: {
        ids: ids.join(','),
        ...options[0]
      }
    });

    return res.data.items;
  }

  /**
   * @description Get a list of tracks by the artist ID.
   * @param {number} id The ID of the artist.
   * @returns {Promise<statsfm.Track[]>} Returns a promise with {@link statsfm.Track Tracks}.
   */
  async tracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get(`/artists/${id}/tracks`);

    return res.data.items as statsfm.Track[];
  }

  async topTracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get(`/artists/${id}/tracks/top`);

    return res.data.items as statsfm.Track[];
  }

  async albums(id: number): Promise<statsfm.Album[]> {
    const res = await this.http.get(`/artists/${id}/albums`);

    return res.data.items as statsfm.Album[];
  }

  async topAlbums(id: number): Promise<statsfm.Album[]> {
    const res = await this.http.get(`/artists/${id}/albums/top`);

    return res.data.items as statsfm.Album[];
  }

  async related(id: number): Promise<statsfm.Artist[]> {
    const res = await this.http.get(`/artists/${id}/related`);

    return res.data.items as statsfm.Artist[];
  }
}
