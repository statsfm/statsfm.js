import { ItemResponse, ItemsResponse, RawFile, RequestData } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class MeManager extends Manager {
  async get(): Promise<statsfm.UserPrivate> {
    const res = await this.http.get<ItemResponse<statsfm.UserPrivate>>(`/me`, {
      authRequired: true
    });

    return res.item;
  }

  async updateMe(data: statsfm.UserPrivate): Promise<statsfm.UserPrivate> {
    const res = await this.http.put<ItemResponse<statsfm.UserPrivate>>('/me', {
      authRequired: true,
      body: JSON.stringify(data)
    });

    return res.item;
  }

  async uploadAvatar(file: File): Promise<{ image: string }> {
    const formData = new FormData();
    formData.append('file', file);
    const res = await this.http.post<{ image: string }>('/me/image', {
      authRequired: true,
      body: formData,
      passThroughBody: true
    });

    return res;
  }

  deleteAccount(): Promise<unknown> {
    return this.http.delete('/me', { authRequired: true });
  }

  async socialMediaConnections(): Promise<statsfm.UserSocialMediaConnection[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserSocialMediaConnection[]>>(
      '/me/connections',
      { authRequired: true }
    );

    return res.items;
  }

  async removeSocialMediaConnection(id: number): Promise<void> {
    await this.http.delete(`/me/connections/${id}`, { authRequired: true });
  }

  async privacySettings(): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get<ItemResponse<statsfm.UserPrivacySettings>>('/me/privacy', {
      authRequired: true
    });

    return res.item;
  }

  async updatePrivacySettings(
    data: statsfm.UserPrivacySettings
  ): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.put<ItemResponse<statsfm.UserPrivacySettings>>('/me/privacy', {
      authRequired: true,
      body: JSON.stringify(data)
    });

    return res.item;
  }

  async customIdAvailable(data: string): Promise<boolean> {
    const res = await this.http.put<ItemResponse<boolean>>('/me/customid-available', {
      authRequired: true,
      body: JSON.stringify({ customId: data })
    });

    return res.item;
  }

  async profile(): Promise<statsfm.UserProfile> {
    const res = await this.http.get<ItemResponse<statsfm.UserProfile>>('/me/profile', {
      authRequired: true
    });

    return res.item;
  }

  async updateProfile(data: statsfm.UserProfile): Promise<statsfm.UserProfile> {
    const res = await this.http.put<ItemResponse<statsfm.UserProfile>>('/me/profile', {
      authRequired: true,
      body: JSON.stringify(data)
    });

    return res.item;
  }

  async imports(): Promise<statsfm.UserImport[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserImport[]>>('/me/imports', {
      authRequired: true
    });

    return res.items;
  }

  async import(file: Required<RawFile>, requestData?: RequestData): Promise<statsfm.UserImport> {
    return await this.importSpotify(file, requestData);
  }

  async importSpotify(
    file: Required<RawFile>,
    requestData?: RequestData
  ): Promise<statsfm.UserImport> {
    const res = await this.http.post<ItemResponse<statsfm.UserImport>>('/me/imports/SPOTIFY', {
      ...requestData,
      authRequired: true,
      files: [file]
    });

    return res.item;
  }

  async importAppleMusic(
    file: Required<RawFile>,
    requestData?: RequestData
  ): Promise<statsfm.UserImport> {
    const res = await this.http.post<ItemResponse<statsfm.UserImport>>('/me/imports/APPLEMUSIC', {
      ...requestData,
      authRequired: true,
      files: [file]
    });

    return res.item;
  }

  async removeImport(id: number): Promise<void> {
    await this.http.delete(`/me/imports/${id}`, { authRequired: true });
  }

  async setConnectedServiceSettings(
    service: statsfm.AvailableService,
    settings: statsfm.ServiceSettings
  ): Promise<void> {
    await this.http.post(`/me/service/${service}/settings`, {
      authRequired: true,
      body: JSON.stringify(settings)
    });
  }

  async spotifyPlaylists(): Promise<statsfm.UserSpotifyPlaylist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserSpotifyPlaylist[]>>(
      '/me/playlists/spotify',
      { authRequired: true }
    );

    return res.items;
  }

  async getGiftCode(code: string): Promise<statsfm.GiftCode> {
    const res = await this.http.get<ItemResponse<statsfm.GiftCode>>(`/me/plus/giftcodes/${code}`, {
      authRequired: true,
      query: { type: 'code' }
    });

    return res.item;
  }

  async updateGiftCode(giftCodeId: number, message: string | null): Promise<statsfm.GiftCode> {
    const res = await this.http.put<ItemResponse<statsfm.GiftCode>>(
      `/me/plus/giftcodes/${giftCodeId}`,
      {
        authRequired: true,
        body: JSON.stringify({ message })
      }
    );

    return res.item;
  }

  async getGiftCodes(): Promise<statsfm.GiftCode[]> {
    const res = await this.http.get<ItemsResponse<statsfm.GiftCode[]>>('/me/plus/giftcodes', {
      authRequired: true
    });

    return res.items;
  }

  async redeemGiftCode(code: string): Promise<statsfm.GiftCode> {
    const res = await this.http.post<ItemResponse<statsfm.GiftCode>>('/me/plus/giftcodes/redeem', {
      authRequired: true,
      body: JSON.stringify({ code })
    });

    return res.item;
  }

  createSpotifyPlaylist(): Promise<statsfm.UserSpotifyPlaylist> {
    throw new Error('unimplemented error');
  }

  async updateSpotifyPlaylist(
    data: statsfm.UserSpotifyPlaylist
  ): Promise<statsfm.UserSpotifyPlaylist> {
    const res = await this.http.put<ItemResponse<statsfm.UserSpotifyPlaylist>>(
      `/me/playlists/spotify/${data.id}`,
      {
        authRequired: true,
        body: JSON.stringify(data)
      }
    );

    return res.item;
  }

  async deleteSpotifyPlaylist(id: number): Promise<void> {
    await this.http.delete(`/me/playlists/spotify/${id}`, { authRequired: true });
  }

  async devices(): Promise<statsfm.UserDevice[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserDevice[]>>('/me/devices', {
      authRequired: true
    });

    return res.items;
  }

  async soulmates(forceRefresh = false): Promise<statsfm.Soulmate[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Soulmate[]>>('/me/soulmates', {
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
  async friends(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends', { authRequired: true });

    return res;
  }

  /**
   * @deprecated use {@link FriendsManager#getIncomingRequests} instead
   */
  async incomingFriendRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/incoming', {
      authRequired: true
    });

    return res;
  }

  /**
   * @deprecated use {@link FriendsManager#getOutgoingRequests} instead
   */
  async outgoingFriendRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/outgoing', {
      authRequired: true
    });

    return res;
  }

  /**
   * @deprecated use {@link FriendsManager#sendRequest} instead
   * @param id
   */
  async sendFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/send/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }

    return true;
  }

  /**
   * @deprecated use {@link FriendsManager#cancelRequest} instead
   * @param id
   */
  async cancelFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/cancel/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * @deprecated use {@link FriendsManager#acceptRequest} instead
   * @param id
   */
  async acceptFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/accept/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * @deprecated use {@link FriendsManager#denyRequest} instead
   * @param id
   */
  async denyFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/deny/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * @deprecated use {@link FriendsManager#remove} instead
   * @param id
   */
  async removeFriend(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/remove/${encodeURIComponent(id)}`, { authRequired: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   *
   * @param id
   * @deprecated use {@link FriendsManager#status} instead
   */
  async friendStatus(id: string): Promise<statsfm.FriendStatus> {
    const res = await this.http.get<{ data: statsfm.FriendStatus }>(
      `/friends/status/${encodeURIComponent(id)}`,
      { authRequired: true }
    );

    return statsfm.FriendStatus[res.data] ?? statsfm.FriendStatus.NONE;
  }
}
