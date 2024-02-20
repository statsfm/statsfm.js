"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statsfm = __importStar(require("../../interfaces/statsfm"));
const Manager_1 = __importDefault(require("../Manager"));
class FriendsManager extends Manager_1.default {
    async get() {
        const res = await this.http.get('/friends', { authRequired: true });
        return res;
    }
    async getIncomingRequests() {
        const res = await this.http.get('/friends/requests/incoming', {
            authRequired: true
        });
        return res;
    }
    async getOutgoingRequests() {
        const res = await this.http.get('/friends/requests/outgoing', {
            authRequired: true
        });
        return res;
    }
    async sendRequest(id) {
        try {
            await this.http.post(`/friends/requests/send/${encodeURIComponent(id)}`, {
                authRequired: true
            });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async cancelRequest(id) {
        try {
            await this.http.post(`/friends/requests/cancel/${encodeURIComponent(id)}`, {
                authRequired: true
            });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async acceptRequest(id) {
        try {
            await this.http.post(`/friends/requests/accept/${encodeURIComponent(id)}`, {
                authRequired: true
            });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async denyRequest(id) {
        try {
            await this.http.post(`/friends/requests/deny/${encodeURIComponent(id)}`, {
                authRequired: true
            });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async remove(id) {
        try {
            await this.http.post(`/friends/remove/${encodeURIComponent(id)}`, { authRequired: true });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async block(id) {
        try {
            await this.http.post(`/friends/block/${encodeURIComponent(id)}`, { authRequired: true });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async blockStatus(id) {
        try {
            await this.http.get(`/friends/block-status/${encodeURIComponent(id)}`, {
                authRequired: true
            });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async status(id) {
        const res = await this.http.get(`/friends/status/${encodeURIComponent(id)}`, { authRequired: true });
        return statsfm.FriendStatus[res.data] ?? statsfm.FriendStatus.NONE;
    }
}
exports.default = FriendsManager;
//# sourceMappingURL=FriendsManager.js.map