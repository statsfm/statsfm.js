"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class SearchManager extends Manager_1.default {
    async search(query, type, options = {}) {
        // TODO: implement paging
        const res = await this.http.get(`/search`, {
            query: {
                query,
                type: type.join(','),
                ...options
            }
        });
        return res.items;
    }
    async searchElastic(query, type, options = {}) {
        // TODO: implement paging
        const res = await this.http.get(`/search/elastic`, {
            query: {
                query,
                type: type.join(','),
                ...options
            }
        });
        return res.items;
    }
}
exports.default = SearchManager;
//# sourceMappingURL=SearchManager.js.map