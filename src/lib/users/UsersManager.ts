import { ItemResponse, ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class UsersManager extends Manager {
  async get(userId: string): Promise<statsfm.UserPublic> {
    const res = await this.http.get<ItemResponse<statsfm.UserPublic>>(`/users/${userId}`);

    return res.item;
  }

  async privacySettings(userId: string): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get<ItemResponse<statsfm.UserPrivacySettings>>(
      `/users/${userId}/privacy`
    );

    return res.item;
  }

  async profile(userId: string): Promise<statsfm.UserProfile> {
    const res = await this.http.get<ItemResponse<statsfm.UserProfile>>(`/users/${userId}/profile`);

    return res.item;
  }

  async streams(
    userId: string,
    options: statsfm.QueryWithDates & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Stream[]>>(`/users/${userId}/streams`, {
      query: {
        ...options
      }
    });

    return res.items;
  }

  async stats(
    userId: string,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.ExtendedDateStats> {
    const res = await this.http.get<ItemsResponse<statsfm.ExtendedDateStats>>(
      `/users/${userId}/streams/stats`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async dateStats(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithTimeZone = {}
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<ItemsResponse<statsfm.DateStats>>(
      `/users/${userId}/streams/stats/dates`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async perDayStats(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithTimeZone = {}
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<ItemsResponse<statsfm.DateStats>>(
      `/users/${userId}/streams/stats/dates`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async currentlyStreaming(userId: string): Promise<statsfm.CurrentlyPlayingTrack> {
    const res = await this.http.get<ItemResponse<statsfm.CurrentlyPlayingTrack>>(
      `/users/${userId}/streams/current`
    );

    return res.item;
  }

  async recentlyStreamed(
    userId: string,
    options: statsfm.QueryWithPaging = {}
  ): Promise<statsfm.RecentlyPlayedTrack[]> {
    const res = await this.http.get<ItemsResponse<statsfm.RecentlyPlayedTrack[]>>(
      `/users/${userId}/streams/recent`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async trackStreams(
    userId: string,
    trackId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Stream[]>>(
      `/users/${userId}/streams/tracks/${trackId}`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async trackStats(
    userId: string,
    trackId: number,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get<ItemsResponse<statsfm.StreamStats>>(
      `/users/${userId}/streams/tracks/${trackId}/stats`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async trackDateStats(
    userId: string,
    trackId: number,
    timeZone: string,
    options?: statsfm.QueryStatsDates
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<ItemsResponse<statsfm.DateStats>>(
      `/users/${userId}/streams/tracks/${trackId}/stats/dates`,
      {
        query: {
          ...options,
          timeZone
        }
      }
    );

    return res.items;
  }

  async trackPerDayStats(
    userId: string,
    trackId: number,
    timeZone: string,
    options?: statsfm.QueryStatsDates
  ): Promise<statsfm.PerDayStats> {
    const res = await this.http.get<ItemsResponse<statsfm.PerDayStats>>(
      `/users/${userId}/streams/tracks/${trackId}/stats/per-day`,
      {
        query: {
          ...options,
          timeZone
        }
      }
    );

    return res.items;
  }

  async trackListStreams(
    userId: string,
    trackIds: number[],
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Stream[]>>(
      `/users/${userId}/streams/tracks/list`,
      {
        query: {
          ids: trackIds.join(','),
          ...options
        }
      }
    );

    return res.items;
  }

  async trackListStats(
    userId: string,
    trackIds: number[],
    options: statsfm.QueryWithRange | statsfm.QueryWithDates = {}
  ): Promise<Record<number, statsfm.StreamStats[]>> {
    const res = await this.http.get<ItemsResponse<Record<number, statsfm.StreamStats[]>>>(
      `/users/${userId}/streams/tracks/list/stats`,
      {
        query: {
          ids: trackIds.join(','),
          ...options
        }
      }
    );

    return res.items;
  }

  async artistStreams(
    userId: string,
    artistId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Stream[]>>(
      `/users/${userId}/streams/artists/${artistId}`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async artistStats(
    userId: string,
    artistId: number,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get<ItemsResponse<statsfm.StreamStats>>(
      `/users/${userId}/streams/artists/${artistId}/stats`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async artistDateStats(
    userId: string,
    artistId: number,
    timeZone: string,
    options?: statsfm.QueryStatsDates
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<ItemsResponse<statsfm.DateStats>>(
      `/users/${userId}/streams/artists/${artistId}/stats/dates`,
      {
        query: {
          ...options,
          timeZone
        }
      }
    );

    return res.items;
  }

  async artistPerDayStats(
    userId: string,
    artistId: number,
    timeZone: string,
    options?: statsfm.QueryStatsDates
  ): Promise<statsfm.PerDayStats> {
    const res = await this.http.get<ItemsResponse<statsfm.PerDayStats>>(
      `/users/${userId}/streams/artists/${artistId}/stats/per-day`,
      {
        query: {
          ...options,
          timeZone
        }
      }
    );

    return res.items;
  }

  async albumStreams(
    userId: string,
    albumId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<ItemsResponse<statsfm.Stream[]>>(
      `/users/${userId}/streams/albums/${albumId}`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async albumStats(
    userId: string,
    albumId: number,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get<ItemResponse<statsfm.StreamStats>>(
      `/users/${userId}/streams/albums/${albumId}/stats`,
      {
        query: {
          ...options
        }
      }
    );

    return res.item;
  }

  async albumDateStats(
    userId: string,
    albumId: number,
    timeZone: string,
    options?: statsfm.QueryStatsDates
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<ItemsResponse<statsfm.DateStats>>(
      `/users/${userId}/streams/albums/${albumId}/stats/dates`,
      {
        query: {
          ...options,
          timeZone
        }
      }
    );

    return res.items;
  }

  async albumPerDayStats(
    userId: string,
    albumId: number,
    timeZone: string,
    options?: statsfm.QueryStatsDates
  ): Promise<statsfm.PerDayStats> {
    const res = await this.http.get<ItemsResponse<statsfm.PerDayStats>>(
      `/users/${userId}/streams/albums/${albumId}/stats/per-day`,
      {
        query: {
          ...options,
          timeZone
        }
      }
    );

    return res.items;
  }

  async topTracks(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopTrack[]>>(
      `/users/${userId}/top/tracks`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async topArtists(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopArtist[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopArtist[]>>(
      `/users/${userId}/top/artists`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async topTracksFromArtist(
    userId: string,
    artistId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopTrack[]>>(
      `/users/${userId}/top/artists/${artistId}/tracks`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async topAlbumsFromArtist(
    userId: string,
    artistId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopAlbum[]>>(
      `/users/${userId}/top/artists/${artistId}/albums`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async topAlbums(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopAlbum[]>>(
      `/users/${userId}/top/albums`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async topTracksFromAlbums(
    userId: string,
    albumId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopTrack[]>>(
      `/users/${userId}/top/albums/${albumId}/tracks`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async topGenres(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopGenre[]> {
    const res = await this.http.get<ItemsResponse<statsfm.TopGenre[]>>(
      `/users/${userId}/top/genres`,
      {
        query: {
          ...options
        }
      }
    );

    return res.items;
  }

  async artistRecords(userId: string): Promise<statsfm.StatsFMRecord[]> {
    const res = await this.http.get<ItemsResponse<statsfm.StatsFMRecord[]>>(
      `/users/${userId}/records/artists`,
      {
        query: {}
      }
    );

    return res.items;
  }

  async friends(userId: string): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<ItemsResponse<statsfm.UserPublic[]>>(
      `/users/${userId}/friends`
    );

    return res.items;
  }

  async friendCount(userId: string): Promise<number> {
    const res = await this.http.get<ItemResponse<number>>(`/users/${userId}/friends/count`);

    return res.item;
  }
}
