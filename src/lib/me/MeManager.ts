import * as statsfm from '../../interfaces/statsfm';
import { RequestInitWithQuery } from '../../interfaces/Request';
import Manager from '../Manager';
import { UserPrivate } from '../../interfaces/statsfm';

export default class MeManager extends Manager {
  async get(): Promise<statsfm.UserPrivate> {
    const res = await this.http.get(`/me`);

    return res.data.item;
  }

  async updateMe(data: UserPrivate): Promise<statsfm.UserPrivate> {
    const res = await this.http.put('/me', {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  deleteAccount(): Promise<void> {
    throw new Error('unimplemented error');
  }

  async privacySettings(): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get('/me/privacy');

    return res.data.item;
  }

  async updatePrivacySettings(
    data: statsfm.UserPrivacySettings
  ): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.put('/me/privacy', {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  async customIdAvailable(data: string): Promise<boolean> {
    const res = await this.http.put('/me/customid-available', {
      body: JSON.stringify({ customId: data })
    });

    return res.data.item;
  }

  async profile(): Promise<statsfm.UserProfile> {
    const res = await this.http.get('/me/profile');

    return res.data.item;
  }

  async updateProfile(data: statsfm.UserProfile): Promise<statsfm.UserPrivacySettings[]> {
    const res = await this.http.put('/me/profile', {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  async imports(): Promise<statsfm.UserImport[]> {
    const res = await this.http.get('/me/imports');

    return res.data.items;
  }

  async import(options?: RequestInitWithQuery): Promise<statsfm.UserImport> {
    const res = await this.http.post('/me/imports', options);

    return res.data.item;
  }

  async removeImport(id: number): Promise<void> {
    await this.http.delete(`/me/imports/${id}`);
  }

  async spotifyPlaylists(): Promise<statsfm.UserSpotifyPlaylist[]> {
    const res = await this.http.get('/me/playlists/spotify');

    return res.data.items;
  }

  createSpotifyPlaylist(): Promise<statsfm.UserSpotifyPlaylist> {
    throw new Error('unimplemented error');
  }

  async updateSpotifyPlaylist(
    data: statsfm.UserSpotifyPlaylist
  ): Promise<statsfm.UserSpotifyPlaylist> {
    const res = await this.http.put(`/me/playlists/spotify/${data.id}`, {
      body: JSON.stringify(data)
    });

    return res.data.item;
  }

  async deleteSpotifyPlaylist(id: number): Promise<void> {
    await this.http.delete(`/me/playlists/spotify/${id}`);
  }
}
