"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class ChartsManager extends Manager_1.default {
    async topTracks(options) {
        const res = await this.http.get(`/charts/top/tracks`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topArtists(options) {
        const res = await this.http.get(`/charts/top/artists`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topAlbums(options) {
        const res = await this.http.get(`/charts/top/albums`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
    async topUsers(options) {
        const res = await this.http.get(`/charts/top/users`, {
            query: {
                ...options
            }
        });
        return res.items;
    }
}
exports.default = ChartsManager;
//# sourceMappingURL=ChartsManager.js.map