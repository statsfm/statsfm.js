import { RequestInitWithQuery } from "../../interfaces/Request";
import Manager from "../Manager";

export default class MeManager extends Manager {
  async get(options?: RequestInitWithQuery) {
    const res = await this.http.get(`/me`, options);

    return res.data.item;
  }

  async deleteAccount(options?: RequestInitWithQuery) {
    const res = await this.http.get("/me", options);

    return res;
  }
}
