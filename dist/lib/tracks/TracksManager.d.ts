import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class TracksManager extends Manager {
    /**
     * @description Get a track by ID.
     * @param {number} id The ID of the track.
     * @returns {Promise<Track>} Returns a promise with a single {@link Track}.
     */
    get(id: number): Promise<statsfm.v1.Track>;
    /**
     * @description Get a list of tracks by IDs.
     * @param {number} ids The IDs of the tracks.
     * @returns {Promise<Track[]>} Returns a promise with a single {@link Track}.
     */
    list(ids: number[]): Promise<statsfm.v1.Track[]>;
    getSpotify(id: string): Promise<statsfm.v1.Track>;
    listSpotify(ids: string[]): Promise<statsfm.v1.Track[]>;
    audioAnalysis(spotifyId: string): Promise<statsfm.AudioAnalysis>;
    audioFeature(spotifyId: string): Promise<statsfm.AudioFeatures>;
    audioFeatures(spotifyIds: string[]): Promise<statsfm.AudioFeatures[]>;
    topListeners(id: number, friendsOnly?: boolean): Promise<statsfm.TopUser[]>;
}
