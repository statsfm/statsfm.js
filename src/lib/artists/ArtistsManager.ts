import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class ArtistsManager extends Manager {
  /**
   * @description Get a artist by ID.
   * @param {number} id The ID of the artist.
   * @returns {Promise<Artist>} Returns a promise with a single {@link Artist}.
   */
  async get(id: number): Promise<statsfm.Artist> {
    const res = await this.http.get<ItemResponse<statsfm.Artist>>(`/artists/${id}`);

    return res.item;
  }

  /**
   * @description Get a list of artists by IDs.
   * @param {number} ids The IDs of the track.
   * @returns {Promise<Artist[]>} Returns a promise with a {@link Artist}s.
   */
  async list(ids: number[]): Promise<statsfm.Artist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Artist[]>>(`/artists/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.items;
  }

  async getSpotify(id: string): Promise<statsfm.Artist> {
    const res = await this.http.get<ItemResponse<statsfm.Artist>>(`/artists/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.item;
  }

  async listSpotify(ids: string[]): Promise<statsfm.Artist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Artist[]>>(`/artists/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.items;
  }

  /**
   * @description Get a list of tracks by the artist ID.
   * @param {number} id The IDs of the artist.
   * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
   */
  async tracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Track[]>>(`/artists/${id}/tracks`);

    return res.items;
  }

  async topTracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Track[]>>(`/artists/${id}/tracks/top`);

    return res.items;
  }

  async albums(id: number): Promise<statsfm.Album[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Album[]>>(`/artists/${id}/albums`);

    return res.items.map((item) => ({
      ...item,
      releaseDate: new Date(item.releaseDate)
    }));
  }

  async topAlbums(id: number): Promise<statsfm.Album[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Album[]>>(`/artists/${id}/albums/top`);

    return res.items.map((item) => ({
      ...item,
      releaseDate: new Date(item.releaseDate)
    }));
  }

  async related(id: number): Promise<statsfm.Artist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Artist[]>>(`/artists/${id}/related`);

    return res.items;
  }

  async topListeners(id: number, friendsOnly = false): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopUser[]>>(
      `/artists/${id}/top/listeners`,
      {
        authRequired: true,
        query: friendsOnly === false ? {} : { friends: friendsOnly } // for caching
      }
    );

    return res.items.map((item) => ({
      ...item,
      user: {
        ...item.user,
        createdAt: new Date(item.user.createdAt),
        ban: item.user.ban
          ? {
              ...item.user.ban,
              createdAt: new Date(item.user.ban.createdAt)
            }
          : null
      }
    }));
  }
}
