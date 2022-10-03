import * as statsfm from '../../interfaces/statsfm';
import { Response, RequestInitWithQuery } from '../../interfaces/Request';
import Manager from '../Manager';
import { UserPrivate } from '../../interfaces/statsfm';

export default class MeManager extends Manager {
  async get(): Promise<statsfm.UserPrivate> {
    const res = await this.http.get<statsfm.UserPrivate>(`/me`);

    return res.data.item;
  }

  async updateMe(data: UserPrivate): Promise<statsfm.UserPrivate> {
    const res = await this.http.put<statsfm.UserPrivate>('/me', {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  deleteAccount(): Promise<Response<unknown>> {
    return this.http.delete('/me');
  }

  async socialMediaConnections(): Promise<statsfm.UserSocialMediaConnection[]> {
    const res = await this.http.get<statsfm.UserSocialMediaConnection[]>('/me/connections');

    return res.data.items;
  }

  async removeSocialMediaConnection(id: number): Promise<void> {
    await this.http.delete(`/me/connections/${id}`);
  }

  async privacySettings(): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get<statsfm.UserPrivacySettings>('/me/privacy');

    return res.data.item;
  }

  async updatePrivacySettings(
    data: statsfm.UserPrivacySettings
  ): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.put<statsfm.UserPrivacySettings>('/me/privacy', {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  async customIdAvailable(data: string): Promise<boolean> {
    const res = await this.http.put<boolean>('/me/customid-available', {
      body: JSON.stringify({ customId: data })
    });

    return res.data.item;
  }

  async profile(): Promise<statsfm.UserProfile> {
    const res = await this.http.get<statsfm.UserProfile>('/me/profile');

    return res.data.item;
  }

  async updateProfile(data: statsfm.UserProfile): Promise<statsfm.UserProfile> {
    const res = await this.http.put<statsfm.UserProfile>('/me/profile', {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  async imports(): Promise<statsfm.UserImport[]> {
    const res = await this.http.get<statsfm.UserImport[]>('/me/imports');

    return res.data.items;
  }

  async import(options?: RequestInitWithQuery): Promise<statsfm.UserImport> {
    const res = await this.http.post<statsfm.UserImport>('/me/imports', options);

    return res.data.item;
  }

  async removeImport(id: number): Promise<void> {
    await this.http.delete(`/me/imports/${id}`);
  }

  async spotifyPlaylists(): Promise<statsfm.UserSpotifyPlaylist[]> {
    const res = await this.http.get<statsfm.UserSpotifyPlaylist[]>('/me/playlists/spotify');

    return res.data.items;
  }

  createSpotifyPlaylist(): Promise<statsfm.UserSpotifyPlaylist> {
    throw new Error('unimplemented error');
  }

  async updateSpotifyPlaylist(
    data: statsfm.UserSpotifyPlaylist
  ): Promise<statsfm.UserSpotifyPlaylist> {
    const res = await this.http.put<statsfm.UserSpotifyPlaylist>(
      `/me/playlists/spotify/${data.id}`,
      {
        body: JSON.stringify(data)
      }
    );

    return res.data.item;
  }

  async deleteSpotifyPlaylist(id: number): Promise<void> {
    await this.http.delete(`/me/playlists/spotify/${id}`);
  }

  async soulmates(forceRefresh = false): Promise<statsfm.Soulmate[]> {
    const res = await this.http.get<statsfm.Soulmate[]>(
      '/me/soulmates',
      forceRefresh
        ? {
            query: { force: forceRefresh }
          }
        : {} // for caching
    );

    return res.data.items;
  }

  async friends(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends');

    // @ts-expect-error // TODO
    return res.data.data;
  }

  async incomingFriendRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/incoming');

    // @ts-expect-error // TODO
    return res.data.data;
  }

  async outgoingFriendRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/outgoing');

    // @ts-expect-error // TODO
    return res.data.data;
  }

  async sendFriendRequest(id: string): Promise<boolean> {
    const res = await this.http.post(`/friends/requests/send/${encodeURIComponent(id)}`);

    return res.status === 200;
  }

  async cancelFriendRequest(id: string): Promise<boolean> {
    const res = await this.http.post(`/friends/requests/cancel/${encodeURIComponent(id)}`);

    return res.status === 200;
  }

  async acceptFriendRequest(id: string): Promise<boolean> {
    const res = await this.http.post(`/friends/requests/accept/${encodeURIComponent(id)}`);

    return res.status === 200;
  }

  async denyFriendRequest(id: string): Promise<boolean> {
    const res = await this.http.post(`/friends/requests/deny/${encodeURIComponent(id)}`);

    return res.status === 200;
  }

  async removeFriend(id: string): Promise<boolean> {
    const res = await this.http.post(`/friends/remove/${encodeURIComponent(id)}`);

    return res.status === 200;
  }

  async friendStatus(id: string): Promise<statsfm.FriendStatus> {
    const res = await this.http.get<statsfm.FriendStatus>(
      `/friends/status/${encodeURIComponent(id)}`
    );

    // @ts-expect-error // TODO fix response
    const status = res.data.data;

    return statsfm.FriendStatus[status] ?? statsfm.FriendStatus.NONE;
  }
}
