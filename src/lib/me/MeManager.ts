import { ItemResponse, ItemsResponse, RawFile, RequestData } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class MeManager extends Manager {
  async get(): Promise<statsfm.UserPrivate> {
    const res = await this.http.get<ItemResponse<statsfm.UserPrivate>>(`/me`, { auth: true });

    return res.item;
  }

  async updateMe(data: statsfm.UserPrivate): Promise<statsfm.UserPrivate> {
    const res = await this.http.put<ItemResponse<statsfm.UserPrivate>>('/me', {
      auth: true,
      body: JSON.stringify(data)
    });

    return res.item;
  }

  deleteAccount(): Promise<unknown> {
    return this.http.delete('/me', { auth: true });
  }

  async socialMediaConnections(): Promise<statsfm.UserSocialMediaConnection[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserSocialMediaConnection[]>>(
      '/me/connections',
      { auth: true }
    );

    return res.items;
  }

  async removeSocialMediaConnection(id: number): Promise<void> {
    await this.http.delete(`/me/connections/${id}`, { auth: true });
  }

  async privacySettings(): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get<ItemResponse<statsfm.UserPrivacySettings>>('/me/privacy', {
      auth: true
    });

    return res.item;
  }

  async updatePrivacySettings(
    data: statsfm.UserPrivacySettings
  ): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.put<ItemResponse<statsfm.UserPrivacySettings>>('/me/privacy', {
      auth: true,
      body: JSON.stringify(data)
    });

    return res.item;
  }

  async customIdAvailable(data: string): Promise<boolean> {
    const res = await this.http.put<ItemResponse<boolean>>('/me/customid-available', {
      auth: true,
      body: JSON.stringify({ customId: data })
    });

    return res.item;
  }

  async profile(): Promise<statsfm.UserProfile> {
    const res = await this.http.get<ItemResponse<statsfm.UserProfile>>('/me/profile', {
      auth: true
    });

    return res.item;
  }

  async updateProfile(data: statsfm.UserProfile): Promise<statsfm.UserProfile> {
    const res = await this.http.put<ItemResponse<statsfm.UserProfile>>('/me/profile', {
      auth: true,
      body: JSON.stringify(data)
    });

    return res.item;
  }

  async imports(): Promise<statsfm.UserImport[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserImport[]>>('/me/imports', {
      auth: true
    });

    return res.items;
  }

  async import(file: Required<RawFile>, requestData?: RequestData): Promise<statsfm.UserImport> {
    const res = await this.http.post<ItemResponse<statsfm.UserImport>>('/me/imports', {
      ...requestData,
      auth: true,
      files: [file]
    });

    return res.item;
  }

  async removeImport(id: number): Promise<void> {
    await this.http.delete(`/me/imports/${id}`, { auth: true });
  }

  async spotifyPlaylists(): Promise<statsfm.UserSpotifyPlaylist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserSpotifyPlaylist[]>>(
      '/me/playlists/spotify',
      { auth: true }
    );

    return res.items;
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
        auth: true,
        body: JSON.stringify(data)
      }
    );

    return res.item;
  }

  async deleteSpotifyPlaylist(id: number): Promise<void> {
    await this.http.delete(`/me/playlists/spotify/${id}`, { auth: true });
  }

  async devices(): Promise<statsfm.UserDevice[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserDevice[]>>('/me/devices', {
      auth: true
    });

    return res.items;
  }

  async soulmates(forceRefresh = false): Promise<statsfm.Soulmate[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Soulmate[]>>('/me/soulmates', {
      auth: true,
      ...(forceRefresh
        ? {
            query: { force: forceRefresh }
          }
        : {}) // for caching
    });

    return res.items;
  }

  async friends(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends', { auth: true });

    return res;
  }

  async incomingFriendRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/incoming', {
      auth: true
    });

    return res;
  }

  async outgoingFriendRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/outgoing', {
      auth: true
    });

    return res;
  }

  async sendFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/send/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }

    return true;
  }

  async cancelFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/cancel/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async acceptFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/accept/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async denyFriendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/deny/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async removeFriend(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/remove/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async friendStatus(id: string): Promise<statsfm.FriendStatus> {
    const res = await this.http.get<statsfm.FriendStatus>(
      `/friends/status/${encodeURIComponent(id)}`,
      { auth: true }
    );

    return statsfm.FriendStatus[res] ?? statsfm.FriendStatus.NONE;
  }
}
