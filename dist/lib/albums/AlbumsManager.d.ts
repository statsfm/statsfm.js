import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class AlbumsManager extends Manager {
    /**
     * @description Get a album by ID.
     * @param {number} id The ID of the album.
     * @returns {Promise<Album>} Returns a promise with a single {@link Album}.
     */
    get(id: number): Promise<statsfm.v1.Album>;
    /**
     * @description Get a list of albums by IDs.
     * @param {string} ids The IDs of the albums
     * * @returns {Promise<Album[]>} Returns a promise with a {@link Album}s.
     */
    list(ids: number[]): Promise<statsfm.v1.Album[]>;
    getSpotify(id: string): Promise<statsfm.v1.Album>;
    listSpotify(ids: string[]): Promise<statsfm.v1.Album[]>;
    /**
     * @description Get a list of tracks on the album.
     * @param {number} id The IDs of the album.
     * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
     */
    tracks(id: number): Promise<statsfm.v1.Track[]>;
    topListeners(id: number, friendsOnly?: boolean): Promise<statsfm.TopUser[]>;
}
