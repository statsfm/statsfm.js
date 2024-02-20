"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class TracksManager extends Manager_1.default {
    /**
     * @description Get a track by ID.
     * @param {number} id The ID of the track.
     * @returns {Promise<Track>} Returns a promise with a single {@link Track}.
     */
    async get(id) {
        const res = await this.http.get(`/tracks/${id}`);
        return res.item;
    }
    /**
     * @description Get a list of tracks by IDs.
     * @param {number} ids The IDs of the tracks.
     * @returns {Promise<Track[]>} Returns a promise with a single {@link Track}.
     */
    async list(ids) {
        const res = await this.http.get(`/tracks/list`, {
            query: {
                ids: ids.join(',')
            }
        });
        return res.items;
    }
    async getSpotify(id) {
        const res = await this.http.get(`/tracks/${id}`, {
            query: {
                type: 'spotify'
            }
        });
        return res.item;
    }
    async listSpotify(ids) {
        const res = await this.http.get(`/tracks/list`, {
            query: {
                ids: ids.join(','),
                type: 'spotify'
            }
        });
        return res.items;
    }
    async audioAnalysis(spotifyId) {
        const res = await this.http.get(`/SPOTIFY/audio-analysis/${spotifyId}`);
        return res.item;
    }
    async audioFeature(spotifyId) {
        const res = await this.http.get(`/SPOTIFY/audio-features/${spotifyId}`);
        return res.item;
    }
    async audioFeatures(spotifyIds) {
        const res = await this.http.get(`/SPOTIFY/audio-features`, {
            query: {
                ids: spotifyIds.join(',')
            }
        });
        return res.items;
    }
    async topListeners(id, friendsOnly = false) {
        const res = await this.http.get(`/tracks/${id}/top/listeners`, {
            authRequired: true,
            query: friendsOnly === false ? {} : { friends: friendsOnly } // for caching
        });
        return res.items;
    }
}
exports.default = TracksManager;
//# sourceMappingURL=TracksManager.js.map