import { HttpManager } from './http/HttpManager';

export default class Manager {
  protected http: HttpManager;

  constructor(http: HttpManager) {
    this.http = http;
  }
}
