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
    options?: RequestInitWithQuery & { body: statsfm.UserPrivacySettings }
  ): Promise<statsfm.UserPrivacySettings[]> {
    const res = await this.http.put('/me/privacy', options);

    return res.data.item;
  }

  async profile(options?: RequestInitWithQuery): Promise<statsfm.UserProfile> {
    const res = await this.http.get('/me/profile', options);

    return res.data.item;
  }

  async updateProfile(
    options?: RequestInitWithQuery & { body: statsfm.UserProfile }
  ): Promise<statsfm.UserPrivacySettings[]> {
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
