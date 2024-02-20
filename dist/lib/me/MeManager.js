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
class MeManager extends Manager_1.default {
    async get() {
        const res = await this.http.get(`/me`, {
            authRequired: true
        });
        return res.item;
    }
    async updateMe(data) {
        const res = await this.http.put('/me', {
            authRequired: true,
            body: JSON.stringify(data)
        });
        return res.item;
    }
    async uploadAvatar(file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await this.http.post('/me/image', {
            authRequired: true,
            body: formData,
            passThroughBody: true
        });
        return res;
    }
    deleteAccount() {
        return this.http.delete('/me', { authRequired: true });
    }
    async socialMediaConnections() {
        const res = await this.http.get('/me/connections', { authRequired: true });
        return res.items;
    }
    async removeSocialMediaConnection(id) {
        await this.http.delete(`/me/connections/${id}`, { authRequired: true });
    }
    async privacySettings() {
        const res = await this.http.get('/me/privacy', {
            authRequired: true
        });
        return res.item;
    }
    async updatePrivacySettings(data) {
        const res = await this.http.put('/me/privacy', {
            authRequired: true,
            body: JSON.stringify(data)
        });
        return res.item;
    }
    async customIdAvailable(data) {
        const res = await this.http.put('/me/customid-available', {
            authRequired: true,
            body: JSON.stringify({ customId: data })
        });
        return res.item;
    }
    async profile() {
        const res = await this.http.get('/me/profile', {
            authRequired: true
        });
        return res.item;
    }
    async updateProfile(data) {
        const res = await this.http.put('/me/profile', {
            authRequired: true,
            body: JSON.stringify(data)
        });
        return res.item;
    }
    async imports() {
        const res = await this.http.get('/me/imports', {
            authRequired: true
        });
        return res.items;
    }
    async import(file, platform, requestData) {
        const res = await this.http.post(`/me/imports/${platform}`, {
            ...requestData,
            authRequired: true,
            files: [file]
        });
        return res.item;
    }
    async removeImport(id) {
        await this.http.delete(`/me/imports/${id}`, { authRequired: true });
    }
    async setConnectedServiceSettings(service, settings) {
        await this.http.post(`/me/service/${service}/settings`, {
            authRequired: true,
            body: JSON.stringify(settings)
        });
    }
    async spotifyPlaylists() {
        const res = await this.http.get('/me/playlists/spotify', { authRequired: true });
        return res.items;
    }
    async getGiftCode(code) {
        const res = await this.http.get(`/me/plus/giftcodes/${code}`, {
            authRequired: true,
            query: { type: 'code' }
        });
        return res.item;
    }
    async updateGiftCode(giftCodeId, message) {
        const res = await this.http.put(`/me/plus/giftcodes/${giftCodeId}`, {
            authRequired: true,
            body: JSON.stringify({ message })
        });
        return res.item;
    }
    async getGiftCodes() {
        const res = await this.http.get('/me/plus/giftcodes', {
            authRequired: true
        });
        return res.items;
    }
    async redeemGiftCode(code) {
        const res = await this.http.post('/me/plus/giftcodes/redeem', {
            authRequired: true,
            body: JSON.stringify({ code })
        });
        return res.item;
    }
    createSpotifyPlaylist() {
        throw new Error('unimplemented error');
    }
    async updateSpotifyPlaylist(data) {
        const res = await this.http.put(`/me/playlists/spotify/${data.id}`, {
            authRequired: true,
            body: JSON.stringify(data)
        });
        return res.item;
    }
    async deleteSpotifyPlaylist(id) {
        await this.http.delete(`/me/playlists/spotify/${id}`, { authRequired: true });
    }
    async devices() {
        const res = await this.http.get('/me/devices', {
            authRequired: true
        });
        return res.items;
    }
    async soulmates(forceRefresh = false) {
        const res = await this.http.get('/me/soulmates', {
            authRequired: true,
            ...(forceRefresh
                ? {
                    query: { force: forceRefresh }
                }
                : {}) // for caching
        });
        return res.items;
    }
    /**
     * @deprecated use {@link FriendsManager#get} instead
     */
    async friends() {
        const res = await this.http.get('/friends', { authRequired: true });
        return res;
    }
    /**
     * @deprecated use {@link FriendsManager#getIncomingRequests} instead
     */
    async incomingFriendRequests() {
        const res = await this.http.get('/friends/requests/incoming', {
            authRequired: true
        });
        return res;
    }
    /**
     * @deprecated use {@link FriendsManager#getOutgoingRequests} instead
     */
    async outgoingFriendRequests() {
        const res = await this.http.get('/friends/requests/outgoing', {
            authRequired: true
        });
        return res;
    }
    /**
     * @deprecated use {@link FriendsManager#sendRequest} instead
     * @param id
     */
    async sendFriendRequest(id) {
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
    /**
     * @deprecated use {@link FriendsManager#cancelRequest} instead
     * @param id
     */
    async cancelFriendRequest(id) {
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
    /**
     * @deprecated use {@link FriendsManager#acceptRequest} instead
     * @param id
     */
    async acceptFriendRequest(id) {
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
    /**
     * @deprecated use {@link FriendsManager#denyRequest} instead
     * @param id
     */
    async denyFriendRequest(id) {
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
    /**
     * @deprecated use {@link FriendsManager#remove} instead
     * @param id
     */
    async removeFriend(id) {
        try {
            await this.http.post(`/friends/remove/${encodeURIComponent(id)}`, { authRequired: true });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    /**
     *
     * @param id
     * @deprecated use {@link FriendsManager#status} instead
     */
    async friendStatus(id) {
        const res = await this.http.get(`/friends/status/${encodeURIComponent(id)}`, { authRequired: true });
        return statsfm.FriendStatus[res.data] ?? statsfm.FriendStatus.NONE;
    }
}
exports.default = MeManager;
//# sourceMappingURL=MeManager.js.map