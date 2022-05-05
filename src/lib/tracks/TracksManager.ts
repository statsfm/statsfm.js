import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class TracksManager extends Manager {
  /**
   * @description Get a track by ID.
   * @param {T} id The ID of the track.
   * @param {statsfm.QueryWithIdType} options Request options.
   * @returns {Promise<statsfm.Track>} Returns a promise with a single {@link statsfm.Track Track}.
   */
  async get<T extends number | string>(
    id: T,
    ...options: T extends number ? [options?: undefined] : [options: statsfm.QueryWithIdType]
  ): Promise<statsfm.Track> {
    const res = await this.http.get(`/tracks/${id}`, {
      query: options[0]
    });

    return res.data.item;
  }

  /**
   * @description Get a list of tracks by IDs.
   * @param {T} ids The IDs of the tracks.
   * @param {statsfm.QueryWithIdType} options Request options.
   * @returns {Promise<statsfm.Track[]>} Returns a promise with {@link statsfm.Track Tracks}.
   */
  async list<T extends number[] | string[]>(
    ids: T,
    ...options: T extends number ? [options?: undefined] : [options: statsfm.QueryWithIdType]
  ): Promise<statsfm.Track[]> {
    const res = await this.http.get(`/tracks/list`, {
      query: {
        ids: ids.join(','),
        ...options[0]
      }
    });

    return res.data.items;
  }

  async audioAnalysis(spotifyId: string): Promise<statsfm.AudioAnalysis> {
    const res = await this.http.get(`/spotify/audio-analysis/${spotifyId}`);

    return res.data.item;
  }

  async audioFeature(spotifyId: string): Promise<statsfm.AudioFeatures> {
    const res = await this.http.get(`/spotify/audio-features/${spotifyId}`);

    return res.data.item;
  }

  async audioFeatures(spotifyIds: string[]): Promise<statsfm.AudioFeatures[]> {
    const res = await this.http.get(`/spotify/audio-features`, {
      query: {
        ids: spotifyIds.join(',')
      }
    });

    return res.data.items;
  }
}
