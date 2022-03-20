import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class ArtistsManager extends Manager {
  /**
   * @description Get a artist by ID.
   * @param {number} id The ID of the artist.
   * @returns {Promise<Artist>} Returns a promise with a single {@link Artist}.
   */
  async get(id: number): Promise<statsfm.Artist> {
    const res = await this.http.get(`/artists/${id}`);

    return res.data.item as statsfm.Artist;
  }

  /**
   * @description Get a list of artists by IDs.
   * @param {number} ids The IDs of the track.
   * @returns {Promise<Artist[]>} Returns a promise with a {@link Artist}s.
   */
  async list(ids: number[]): Promise<statsfm.Artist[]> {
    const res = await this.http.get(`/artists/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.data.items as statsfm.Artist[];
  }

  async getSpotify(id: string): Promise<statsfm.Artist> {
    const res = await this.http.get(`/artists/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.data.item as statsfm.Artist;
  }

  async listSpotify(ids: string[]): Promise<statsfm.Artist[]> {
    const res = await this.http.get(`/artists/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.data.items as statsfm.Artist[];
  }

  /**
   * @description Get a list of tracks by the artist ID.
   * @param {number} id The IDs of the artist.
   * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
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
