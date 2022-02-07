import { RequestInitWithQuery } from "../../interfaces/Request";
import Manager from "../Manager";

export default class StatsManager extends Manager {
  async getDatabaseSize(options?: RequestInitWithQuery) {
    const res = await this.http.get(`/stats/database/size`, options);

    return res.data.items;
  }
}
