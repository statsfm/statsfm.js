import * as statsfm from '../../interfaces/statsfm';
import {
  QueryWithDates,
  QueryWithOrder,
  QueryWithPaging,
  QueryWithRange,
  QueryWithTimeZoneOfsset
} from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class UsersManager extends Manager {
  async get(userId: string): Promise<any> {
    const res = await this.http.get(`/users/${userId}`);

    return res.data.item;
  }

  async privacySettings(userId: string): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get(`/users/${userId}/privacy`);

    return res.data.item;
  }

  async profile(userId: string): Promise<statsfm.UserProfile> {
    const res = await this.http.get(`/users/${userId}/profile`);

    return res.data.item;
  }

  async streams(
    userId: string,
    options: QueryWithDates & QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${userId}/streams`, { query: options });

    return res.data.items;
  }

  async stats(
    userId: string,
    options?: QueryWithRange | QueryWithDates
  ): Promise<statsfm.ExtendedDateStats> {
    const res = await this.http.get(`/users/${userId}/streams/stats`, { query: options });

    return res.data.items;
  }

  async dateStats(
    userId: string,
    options: (QueryWithRange | QueryWithDates) & QueryWithTimeZoneOfsset = {}
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get(`/users/${userId}/streams/stats/dates`, { query: options });

    return res.data.items;
  }

  async perDayStats(
    userId: string,
    options: (QueryWithRange | QueryWithDates) & QueryWithTimeZoneOfsset = {}
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get(`/users/${userId}/streams/stats/dates`, { query: options });

    return res.data.items;
  }

  async recentlyStreamed(
    userId: string,
    options: QueryWithPaging = {}
  ): Promise<statsfm.RecentlyPlayedTrack[]> {
    const res = await this.http.get(`/users/${userId}/streams/recent`, {
      query: options
    });

    return res.data.items;
  }

  async trackStreams(
    userId: string,
    trackId: number,
    options: (QueryWithRange | QueryWithDates) & QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${userId}/streams/tracks/${trackId}`, {
      query: options
    });

    return res.data.items;
  }

  async trackStats(
    userId: string,
    trackId: number,
    options?: QueryWithRange | QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get(`/users/${userId}/streams/tracks/${trackId}/stats`, {
      query: options
    });

    return res.data.items;
  }

  async trackListStreams(
    userId: string,
    trackIds: number[],
    options: (QueryWithRange | QueryWithDates) & QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${userId}/streams/tracks/list`, {
      query: {
        ids: trackIds.join(','),
        ...options
      }
    });

    return res.data.items;
  }

  async trackListStats(
    userId: string,
    trackIds: number[],
    options: QueryWithRange | QueryWithDates = {}
  ): Promise<Map<number, statsfm.StreamStats[]>> {
    const res = await this.http.get(`/users/${userId}/streams/tracks/list/stats`, {
      query: {
        ids: trackIds.join(','),
        ...options
      }
    });

    return res.data.items;
  }

  async artistStreams(
    userId: string,
    artistId: number,
    options: (QueryWithRange | QueryWithDates) & QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${userId}/streams/artists/${artistId}`, {
      query: options
    });

    return res.data.items;
  }

  async artistStats(
    userId: string,
    artistId: number,
    options?: QueryWithRange | QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get(`/users/${userId}/streams/artists/${artistId}/stats`, {
      query: options
    });

    return res.data.items;
  }

  async albumStreams(
    userId: string,
    albumId: number,
    options: (QueryWithRange | QueryWithDates) & QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${userId}/streams/albums/${albumId}`, {
      query: options
    });

    return res.data.items;
  }

  async albumStats(
    userId: string,
    albumId: number,
    options?: QueryWithRange | QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get(`/users/${userId}/streams/albums/${albumId}/stats`, {
      query: options
    });

    return res.data.item;
  }

  async topTracks(
    userId: string,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get(`/users/${userId}/top/tracks`, { query: options });

    return res.data.items;
  }

  async topArtists(
    userId: string,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopArtist[]> {
    const res = await this.http.get(`/users/${userId}/top/artists`, { query: options });

    return res.data.items;
  }

  async topTracksFromArtist(
    userId: string,
    artistId: number,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get(`/users/${userId}/top/artists/${artistId}/tracks`, {
      query: options
    });

    return res.data.items;
  }

  async topAlbumsFromArtist(
    userId: string,
    artistId: number,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get(`/users/${userId}/top/artists/${artistId}/albums`, {
      query: options
    });

    return res.data.items;
  }

  async topAlbums(
    userId: string,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get(`/users/${userId}/top/albums`, { query: options });

    return res.data.items;
  }

  async topTracksFromAlbums(
    userId: string,
    albumId: number,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get(`/users/${userId}/top/albums/${albumId}/tracks`, {
      query: options
    });

    return res.data.items;
  }

  async topGenres(
    userId: string,
    options: (QueryWithRange | QueryWithDates) & QueryWithOrder = {}
  ): Promise<statsfm.TopGenre[]> {
    const res = await this.http.get(`/users/${userId}/top/genres`, { query: options });

    return res.data.items;
  }

  async artistCrowns(userId: string): Promise<statsfm.ArtistCrown[]> {
    const res = await this.http.get(`/users/${userId}/crowns/artists`, { query: {} });

    return res.data.items;
  }
}
