"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class RecordsManager extends Manager_1.default {
    async getArtistRecords(recordId) {
        const response = await this.http.get(`/records/artists/${recordId}`);
        return response.item;
    }
    async listArtistRecords(recordIds) {
        const response = await this.http.get(`/records/artists`, {
            query: { ids: recordIds.join(',') }
        });
        return response.items;
    }
    async getArtistRecordHistory(recordId) {
        const response = await this.http.get(`/records/artists/${recordId}/history`);
        return response.items;
    }
}
exports.default = RecordsManager;
//# sourceMappingURL=RecordsManager.js.map