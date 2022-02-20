import * as statsfm from '../../interfaces/statsfm';
import { RequestInitWithQuery } from '../../interfaces/Request';
import Manager from '../Manager';

export default class MeManager extends Manager {
  async get(options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/me`, options);

    return res.data.item;
  }

  async deleteAccount(options?: RequestInitWithQuery): Promise<void> {
    await this.http.get('/me', options);
  }

  async privacySettings(options?: RequestInitWithQuery): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get('/me/privacy', options);

    return res.data.item;
  }

  async updatePrivacySettings(
    data: statsfm.UserPrivacySettings,
    options?: RequestInitWithQuery
  ): Promise<statsfm.UserPrivacySettings> {
    if (typeof options !== 'object') options = {};
    options.body = JSON.stringify(data);
    const res = await this.http.put('/me/privacy', options);

    return res.data.item;
  }

  async customIdAvailable(data: string, options?: RequestInitWithQuery): Promise<boolean> {
    if (typeof options !== 'object') options = {};
    options.body = JSON.stringify({ customId: data });
    const res = await this.http.put('/me/customid-available', options);

    return res.data.item;
  }

  async profile(options?: RequestInitWithQuery): Promise<statsfm.UserProfile> {
    const res = await this.http.get('/me/profile', options);

    return res.data.item;
  }

  async updateProfile(
    data: statsfm.UserProfile & { customId?: string },
    options?: RequestInitWithQuery
  ): Promise<statsfm.UserPrivacySettings[]> {
    if (typeof options !== 'object') options = {};
    options.body = JSON.stringify(data);
    const res = await this.http.put('/me/profile', options);

    return res.data.item;
  }

  async imports(options?: RequestInitWithQuery): Promise<statsfm.UserImport[]> {
    const res = await this.http.get('/me/imports', options);

    return res.data.items;
  }

  async import(options?: RequestInitWithQuery): Promise<statsfm.UserImport> {
    const res = await this.http.post('/me/imports', options);

    return res.data.item;
  }

  async removeImport(id: number, options?: RequestInitWithQuery): Promise<void> {
    await this.http.delete(`/me/imports/${id}`, options);
  }
}
