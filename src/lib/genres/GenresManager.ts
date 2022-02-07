import { Album, Artist, Track } from "../../interfaces/Statsfm";
import Manager from "../Manager";

export default class GenresManager extends Manager {
  async get(id: string): Promise<any> {
    const res = await this.http.get(`/genres/${id}`);

    return res.data.item as Album;
  }

  async artists(id: string): Promise<Artist[]> {
    const res = await this.http.get(`/genres/${id}/artists`);

    return res.data.items as Artist[];
  }
}
