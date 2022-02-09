import { Config } from '../interfaces/Config';
import { HttpClient } from './http/HttpManager';

export default class Manager {
  protected http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
}
