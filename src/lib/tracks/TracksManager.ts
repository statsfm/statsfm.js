import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class TracksManager extends Manager {
  /**
   * @description Get a track by ID.
   * @param {number} id The ID of the track.
   * @returns {Promise<Track>} Returns a promise with a single {@link Track}.
   */
  async get(id: number): Promise<statsfm.Track> {
    const res = await this.http.get<statsfm.Track>(`/tracks/${id}`);

    return res.data.item;
  }

  /**
   * @description Get a list of tracks by IDs.
   * @param {number} ids The IDs of the tracks.
   * @returns {Promise<Track[]>} Returns a promise with a single {@link Track}.
   */
  async list(ids: number[]): Promise<statsfm.Track[]> {
    const res = await this.http.get<statsfm.Track[]>(`/tracks/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.data.items;
  }

  async getSpotify(id: string): Promise<statsfm.Track> {
    const res = await this.http.get<statsfm.Track>(`/tracks/${id}`, {
      query: {
        type: 'spotify'
      }
    });

    return res.data.item;
  }

  async listSpotify(ids: string[]): Promise<statsfm.Track[]> {
    const res = await this.http.get<statsfm.Track[]>(`/tracks/list`, {
      query: {
        ids: ids.join(','),
        type: 'spotify'
      }
    });

    return res.data.items;
  }

  async audioAnalysis(spotifyId: string): Promise<statsfm.AudioAnalysis> {
    const res = await this.http.get<statsfm.AudioAnalysis>(`/spotify/audio-analysis/${spotifyId}`);

    return res.data.item;
  }

  async audioFeature(spotifyId: string): Promise<statsfm.AudioFeatures> {
    const res = await this.http.get<statsfm.AudioFeatures>(`/spotify/audio-features/${spotifyId}`);

    return res.data.item;
  }

  async audioFeatures(spotifyIds: string[]): Promise<statsfm.AudioFeatures[]> {
    const res = await this.http.get<statsfm.AudioFeatures[]>(`/spotify/audio-features`, {
      query: {
        ids: spotifyIds.join(',')
      }
    });

    return res.data.items;
  }

  async topListeners(id: number): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<statsfm.TopUser[]>(`/tracks/${id}/listeners/top`);

    return res.data.items;
  }
}
