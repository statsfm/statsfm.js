import { Config } from '../interfaces/Config';
import { HttpClient } from './http/HttpManager';

export default class Manager {
  protected http: HttpClient;

  constructor(protected config: Config) {
    this.http = new HttpClient(this.config);
  }
}
