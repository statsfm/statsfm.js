"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class GenresManager extends Manager_1.default {
    async get(tag) {
        const res = await this.http.get(`/genres/${tag}`);
        return res.item;
    }
    async list(tags) {
        const res = await this.http.get(`/genres`, {
            query: {
                ids: tags.join(',')
            }
        });
        return res.items;
    }
    async artists(id) {
        const res = await this.http.get(`/genres/${id}/artists`);
        return res.items;
    }
}
exports.default = GenresManager;
//# sourceMappingURL=GenresManager.js.map