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
