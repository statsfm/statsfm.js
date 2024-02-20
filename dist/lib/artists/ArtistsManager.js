"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class ArtistsManager extends Manager_1.default {
    /**
     * @description Get a artist by ID.
     * @param {number} id The ID of the artist.
     * @returns {Promise<Artist>} Returns a promise with a single {@link Artist}.
     */
    async get(id) {
        const res = await this.http.get(`/artists/${id}`);
        return res.item;
    }
    /**
     * @description Get a list of artists by IDs.
     * @param {number} ids The IDs of the track.
     * @returns {Promise<Artist[]>} Returns a promise with a {@link Artist}s.
     */
    async list(ids) {
        const res = await this.http.get(`/artists/list`, {
            query: {
                ids: ids.join(',')
            }
        });
        return res.items;
    }
    async getSpotify(id) {
        const res = await this.http.get(`/artists/${id}`, {
            query: {
                type: 'spotify'
            }
        });
        return res.item;
    }
    async listSpotify(ids) {
        const res = await this.http.get(`/artists/list`, {
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
    async tracks(id) {
        const res = await this.http.get(`/artists/${id}/tracks`);
        return res.items;
    }
    async topTracks(id) {
        const res = await this.http.get(`/artists/${id}/tracks/top`);
        return res.items;
    }
    async albums(id) {
        const res = await this.http.get(`/artists/${id}/albums`);
        return res.items;
    }
    async topAlbums(id) {
        const res = await this.http.get(`/artists/${id}/albums/top`);
        return res.items;
    }
    async related(id) {
        const res = await this.http.get(`/artists/${id}/related`);
        return res.items;
    }
    async topListeners(id, friendsOnly = false) {
        const res = await this.http.get(`/artists/${id}/top/listeners`, {
            authRequired: true,
            query: friendsOnly === false ? {} : { friends: friendsOnly } // for caching
        });
        return res.items;
    }
}
exports.default = ArtistsManager;
//# sourceMappingURL=ArtistsManager.js.map