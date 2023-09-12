import { ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class ChartsManager extends Manager {
  async topTracks(options?: statsfm.QueryWithRange): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopTrack[]>>(`/charts/top/tracks`, {
      query: {
        ...options
      }
    });

    return res.items;
  }

  async topArtists(options?: statsfm.QueryWithRange): Promise<statsfm.TopArtist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopArtist[]>>(`/charts/top/artists`, {
      query: {
        ...options
      }
    });

    return res.items;
  }

  async topAlbums(options?: statsfm.QueryWithRange): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopAlbum[]>>(`/charts/top/albums`, {
      query: {
        ...options
      }
    });

    return res.items;
  }

  async topUsers(options?: statsfm.QueryWithRange): Promise<statsfm.TopUser[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopUser[]>>(`/charts/top/users`, {
      query: {
        ...options
      }
    });

    return res.items;
  }
}
