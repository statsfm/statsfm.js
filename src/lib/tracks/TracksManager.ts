import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class TracksManager extends Manager {
  /**
   * @description Get a track by ID.
   * @param {number} id The ID of the track.
   * @returns {Promise<Track>} Returns a promise with a single {@link Track}.
   */
  async get(id: number): Promise<statsfm.Track> {
    const res = await this.http.get<ItemResponse<statsfm.Track>>(`/tracks/${id}`);

    return res.item;
  }

  /**
   * @description Get a list of tracks by IDs.
   * @param {number} ids The IDs of the tracks.
   * @returns {Promise<Track[]>} Returns a promise with a single {@link Track}.
   */
  async list(ids: number[]): Promise<statsfm.Track[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Track[]>>(`/tracks/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.items;
  }

  async getSpotify(id: string): Promise<statsfm.Track> {
    const res = await this.http.get<ItemResponse<statsfm.Track>>(`/tracks/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.item;
  }

  async listSpotify(ids: string[]): Promise<statsfm.Track[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Track[]>>(`/tracks/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.items;
  }

  async audioAnalysis(spotifyId: string): Promise<statsfm.AudioAnalysis> {
    const res = await this.http.get<ItemResponse<statsfm.AudioAnalysis>>(
      `/spotify/audio-analysis/${spotifyId}`
    );

    return res.item;
  }

  async audioFeature(spotifyId: string): Promise<statsfm.AudioFeatures> {
    const res = await this.http.get<ItemResponse<statsfm.AudioFeatures>>(
      `/spotify/audio-features/${spotifyId}`
    );

    return res.item;
  }

  async audioFeatures(spotifyIds: string[]): Promise<statsfm.AudioFeatures[]> {
    const res = await this.http.get<ItemsResponse<statsfm.AudioFeatures[]>>(
      `/spotify/audio-features`,
      {
        query: {
          ids: spotifyIds.join(',')
        }
      }
    );

    return res.items;
  }

  async topListeners(id: number, friendsOnly = false): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopUser[]>>(
      `/tracks/${id}/top/listeners`,
      {
        auth: true,
        query: friendsOnly === false ? {} : { friendsOnly } // for caching
      }
    );

    return res.items;
  }
}
