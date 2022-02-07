import { Config } from "../interfaces/Config";
import { HttpClient } from "./http/HttpManager";

export default class Manager {
  protected http = new HttpClient(this.config);

  constructor(protected config: Config) {}
}
