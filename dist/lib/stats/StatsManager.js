"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../Manager"));
class StatsManager extends Manager_1.default {
    async databaseSize() {
        const res = await this.http.get(`/stats/database/size`);
        return res.item;
    }
}
exports.default = StatsManager;
//# sourceMappingURL=StatsManager.js.map