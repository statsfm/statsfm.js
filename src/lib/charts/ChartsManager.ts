import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class ChartsManager extends Manager {
  async topTracks(options?: statsfm.QueryWithRange): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<statsfm.TopTrack[]>(`/charts/top/tracks`, {
      query: options
    });

    return res.data.items;
  }

  async topArtists(options?: statsfm.QueryWithRange): Promise<statsfm.TopArtist[]> {
    const res = await this.http.get<statsfm.TopArtist[]>(`/charts/top/artists`, {
      query: options
    });

    return res.data.items;
  }

  async topAlbums(options?: statsfm.QueryWithRange): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get<statsfm.TopAlbum[]>(`/charts/top/albums`, {
      query: options
    });

    return res.data.items;
  }
}
