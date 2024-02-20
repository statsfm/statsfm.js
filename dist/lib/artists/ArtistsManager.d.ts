import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class ArtistsManager extends Manager {
    /**
     * @description Get a artist by ID.
     * @param {number} id The ID of the artist.
     * @returns {Promise<Artist>} Returns a promise with a single {@link Artist}.
     */
    get(id: number): Promise<statsfm.v1.Artist>;
    /**
     * @description Get a list of artists by IDs.
     * @param {number} ids The IDs of the track.
     * @returns {Promise<Artist[]>} Returns a promise with a {@link Artist}s.
     */
    list(ids: number[]): Promise<statsfm.v1.Artist[]>;
    getSpotify(id: string): Promise<statsfm.v1.Artist>;
    listSpotify(ids: string[]): Promise<statsfm.v1.Artist[]>;
    /**
     * @description Get a list of tracks by the artist ID.
     * @param {number} id The IDs of the artist.
     * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
     */
    tracks(id: number): Promise<statsfm.v1.Track[]>;
    topTracks(id: number): Promise<statsfm.v1.Track[]>;
    albums(id: number): Promise<statsfm.v1.Album[]>;
    topAlbums(id: number): Promise<statsfm.v1.Album[]>;
    related(id: number): Promise<statsfm.v1.Artist[]>;
    topListeners(id: number, friendsOnly?: boolean): Promise<statsfm.TopUser[]>;
}
