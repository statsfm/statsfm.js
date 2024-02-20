"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class UsersManager extends Manager_1.default {
    async get(userId) {
        const res = await this.http.get(`/users/${userId}`);
        return res.item;
    }
    async privacySettings(userId) {
        const res = await this.http.get(`/users/${userId}/privacy`);
        return res.item;
    }
    async profile(userId) {
        const res = await this.http.get(`/users/${userId}/profile`);
        return res.item;
    }
    async streams(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async stats(userId, options) {
        const res = await this.http.get(`/users/${userId}/streams/stats`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async dateStats(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/stats/dates`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async perDayStats(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/stats/dates`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async currentlyStreaming(userId) {
        const res = await this.http.get(`/users/${userId}/streams/current`);
        return res.item;
    }
    async recentlyStreamed(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/recent`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async trackStreams(userId, trackId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/tracks/${trackId}`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async trackStats(userId, trackId, options) {
        const res = await this.http.get(`/users/${userId}/streams/tracks/${trackId}/stats`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async trackDateStats(userId, trackId, timeZone, options) {
        const res = await this.http.get(`/users/${userId}/streams/tracks/${trackId}/stats/dates`, {
            query: {
                ...options,
                timeZone
            }
        });
        return res.items;
    }
    async trackPerDayStats(userId, trackId, timeZone, options) {
        const res = await this.http.get(`/users/${userId}/streams/tracks/${trackId}/stats/per-day`, {
            query: {
                ...options,
                timeZone
            }
        });
        return res.items;
    }
    async trackListStreams(userId, trackIds, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/tracks/list`, {
            query: {
                ids: trackIds.join(','),
                ...options
            }
        });
        return res.items;
    }
    async trackListStats(userId, trackIds, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/tracks/list/stats`, {
            query: {
                ids: trackIds.join(','),
                ...options
            }
        });
        return res.items;
    }
    async artistStreams(userId, artistId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/artists/${artistId}`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async artistStats(userId, artistId, options) {
        const res = await this.http.get(`/users/${userId}/streams/artists/${artistId}/stats`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async artistDateStats(userId, artistId, timeZone, options) {
        const res = await this.http.get(`/users/${userId}/streams/artists/${artistId}/stats/dates`, {
            query: {
                ...options,
                timeZone
            }
        });
        return res.items;
    }
    async artistPerDayStats(userId, artistId, timeZone, options) {
        const res = await this.http.get(`/users/${userId}/streams/artists/${artistId}/stats/per-day`, {
            query: {
                ...options,
                timeZone
            }
        });
        return res.items;
    }
    async albumStreams(userId, albumId, options = {}) {
        const res = await this.http.get(`/users/${userId}/streams/albums/${albumId}`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async albumStats(userId, albumId, options) {
        const res = await this.http.get(`/users/${userId}/streams/albums/${albumId}/stats`, {
            query: {
                ...options
            }
        });
        return res.item;
    }
    async albumDateStats(userId, albumId, timeZone, options) {
        const res = await this.http.get(`/users/${userId}/streams/albums/${albumId}/stats/dates`, {
            query: {
                ...options,
                timeZone
            }
        });
        return res.items;
    }
    async albumPerDayStats(userId, albumId, timeZone, options) {
        const res = await this.http.get(`/users/${userId}/streams/albums/${albumId}/stats/per-day`, {
            query: {
                ...options,
                timeZone
            }
        });
        return res.items;
    }
    async topTracks(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/tracks`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topArtists(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/artists`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topTracksFromArtist(userId, artistId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/artists/${artistId}/tracks`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topAlbumsFromArtist(userId, artistId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/artists/${artistId}/albums`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topAlbums(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/albums`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topTracksFromAlbums(userId, albumId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/albums/${albumId}/tracks`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topGenres(userId, options = {}) {
        const res = await this.http.get(`/users/${userId}/top/genres`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async artistRecords(userId) {
        const res = await this.http.get(`/users/${userId}/records/artists`, {
            query: {}
        });
        return res.items;
    }
    async friends(userId) {
        const res = await this.http.get(`/users/${userId}/friends`);
        return res.items;
    }
    async friendCount(userId) {
        const res = await this.http.get(`/users/${userId}/friends/count`);
        return res.item;
    }
}
exports.default = UsersManager;
//# sourceMappingURL=UsersManager.js.map