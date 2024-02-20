"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class AlbumsManager extends Manager_1.default {
    /**
     * @description Get a album by ID.
     * @param {number} id The ID of the album.
     * @returns {Promise<Album>} Returns a promise with a single {@link Album}.
     */
    async get(id) {
        const res = await this.http.get(`/albums/${id}`);
        return res.item;
    }
    /**
     * @description Get a list of albums by IDs.
     * @param {string} ids The IDs of the albums
     * * @returns {Promise<Album[]>} Returns a promise with a {@link Album}s.
     */
    async list(ids) {
        const res = await this.http.get(`/albums/list`, {
            query: {
                ids: ids.join(',')
            }
        });
        return res.items;
    }
    async getSpotify(id) {
        const res = await this.http.get(`/albums/${id}`, {
            query: {
                type: 'spotify'
            }
        });
        return res.item;
    }
    async listSpotify(ids) {
        const res = await this.http.get(`/albums/list`, {
            query: {
                ids: ids.join(','),
                type: 'spotify'
            }
        });
        return res.items;
    }
    /**
     * @description Get a list of tracks on the album.
     * @param {number} id The IDs of the album.
     * @returns {Promise<Track[]>} Returns a promise with a {@link Track[]}s.
     */
    async tracks(id) {
        const res = await this.http.get(`/albums/${id}/tracks`);
        return res.items;
    }
    async topListeners(id, friendsOnly = false) {
        const res = await this.http.get(`/albums/${id}/top/listeners`, {
            authRequired: true,
            query: friendsOnly === false ? {} : { friends: friendsOnly } // for caching
        });
        return res.items;
    }
}
exports.default = AlbumsManager;
//# sourceMappingURL=AlbumsManager.js.map