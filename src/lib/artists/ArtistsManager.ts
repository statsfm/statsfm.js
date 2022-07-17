import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class ArtistsManager extends Manager {
  /**
   * @description Get a artist by ID.
   * @param {number} id The ID of the artist.
   * @returns {Promise<Artist>} Returns a promise with a single {@link Artist}.
   */
  async get(id: number): Promise<statsfm.Artist> {
    const res = await this.http.get<statsfm.Artist>(`/artists/${id}`);

    return res.data.item;
  }

  /**
   * @description Get a list of artists by IDs.
   * @param {number} ids The IDs of the track.
   * @returns {Promise<Artist[]>} Returns a promise with a {@link Artist}s.
   */
  async list(ids: number[]): Promise<statsfm.Artist[]> {
    const res = await this.http.get<statsfm.Artist[]>(`/artists/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.data.items;
  }

  async getSpotify(id: string): Promise<statsfm.Artist> {
    const res = await this.http.get<statsfm.Artist>(`/artists/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.data.item;
  }

  async listSpotify(ids: string[]): Promise<statsfm.Artist[]> {
    const res = await this.http.get<statsfm.Artist[]>(`/artists/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.data.items;
  }

  /**
   * @description Get a list of tracks by the artist ID.
   * @param {number} id The IDs of the artist.
   * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
   */
  async tracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get<statsfm.Track[]>(`/artists/${id}/tracks`);

    return res.data.items;
  }

  async topTracks(id: number): Promise<statsfm.Track[]> {
    const res = await this.http.get<statsfm.Track[]>(`/artists/${id}/tracks/top`);

    return res.data.items;
  }

  async albums(id: number): Promise<statsfm.Album[]> {
    const res = await this.http.get<statsfm.Album[]>(`/artists/${id}/albums`);

    return res.data.items;
  }

  async topAlbums(id: number): Promise<statsfm.Album[]> {
    const res = await this.http.get<statsfm.Album[]>(`/artists/${id}/albums/top`);

    return res.data.items;
  }

  async related(id: number): Promise<statsfm.Artist[]> {
    const res = await this.http.get<statsfm.Artist[]>(`/artists/${id}/related`);

    return res.data.items;
  }

  async topListeners(id: number): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<statsfm.TopUser[]>(`/artists/${id}/listeners/top`);

    return res.data.items;
  }
}
