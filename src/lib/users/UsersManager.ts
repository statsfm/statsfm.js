import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class UsersManager extends Manager {
  async get(userId: string): Promise<statsfm.UserPublic> {
    const res = await this.http.get<statsfm.UserPublic>(`/users/${userId}`);

    return res.data.item;
  }

  async privacySettings(userId: string): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get<statsfm.UserPrivacySettings>(`/users/${userId}/privacy`);

    return res.data.item;
  }

  async profile(userId: string): Promise<statsfm.UserProfile> {
    const res = await this.http.get<statsfm.UserProfile>(`/users/${userId}/profile`);

    return res.data.item;
  }

  async streams(
    userId: string,
    options: statsfm.QueryWithDates & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<statsfm.Stream[]>(`/users/${userId}/streams`, {
      query: options
    });

    return res.data.items;
  }

  async stats(
    userId: string,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.ExtendedDateStats> {
    const res = await this.http.get<statsfm.ExtendedDateStats>(`/users/${userId}/streams/stats`, {
      query: options
    });

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async dateStats(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) &
      statsfm.QueryWithTimeZoneOfsset = {}
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<statsfm.DateStats>(`/users/${userId}/streams/stats/dates`, {
      query: options
    });

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async perDayStats(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) &
      statsfm.QueryWithTimeZoneOfsset = {}
  ): Promise<statsfm.DateStats> {
    const res = await this.http.get<statsfm.DateStats>(`/users/${userId}/streams/stats/dates`, {
      query: options
    });

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async currentlyStreaming(userId: string): Promise<statsfm.CurrentlyPlayingTrack> {
    const res = await this.http.get<statsfm.CurrentlyPlayingTrack>(
      `/users/${userId}/streams/current`
    );

    return res.data.item;
  }

  async recentlyStreamed(
    userId: string,
    options: statsfm.QueryWithPaging = {}
  ): Promise<statsfm.RecentlyPlayedTrack[]> {
    const res = await this.http.get<statsfm.RecentlyPlayedTrack[]>(
      `/users/${userId}/streams/recent`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async trackStreams(
    userId: string,
    trackId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<statsfm.Stream[]>(
      `/users/${userId}/streams/tracks/${trackId}`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async trackStats(
    userId: string,
    trackId: number,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get<statsfm.StreamStats>(
      `/users/${userId}/streams/tracks/${trackId}/stats`,
      {
        query: options
      }
    );

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async trackListStreams(
    userId: string,
    trackIds: number[],
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<statsfm.Stream[]>(`/users/${userId}/streams/tracks/list`, {
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
    options: statsfm.QueryWithRange | statsfm.QueryWithDates = {}
  ): Promise<Record<number, statsfm.StreamStats[]>> {
    const res = await this.http.get<Record<number, statsfm.StreamStats[]>>(
      `/users/${userId}/streams/tracks/list/stats`,
      {
        query: {
          ids: trackIds.join(','),
          ...options
        }
      }
    );

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async artistStreams(
    userId: string,
    artistId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<statsfm.Stream[]>(
      `/users/${userId}/streams/artists/${artistId}`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async artistStats(
    userId: string,
    artistId: number,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get<statsfm.StreamStats>(
      `/users/${userId}/streams/artists/${artistId}/stats`,
      {
        query: options
      }
    );

    // @ts-expect-error needs to be items but type is no array
    return res.data.items;
  }

  async albumStreams(
    userId: string,
    albumId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithPaging = {}
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get<statsfm.Stream[]>(
      `/users/${userId}/streams/albums/${albumId}`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async albumStats(
    userId: string,
    albumId: number,
    options?: statsfm.QueryWithRange | statsfm.QueryWithDates
  ): Promise<statsfm.StreamStats> {
    const res = await this.http.get<statsfm.StreamStats>(
      `/users/${userId}/streams/albums/${albumId}/stats`,
      {
        query: options
      }
    );

    return res.data.item;
  }

  async topTracks(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<statsfm.TopTrack[]>(`/users/${userId}/top/tracks`, {
      query: options
    });

    return res.data.items;
  }

  async topArtists(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopArtist[]> {
    const res = await this.http.get<statsfm.TopArtist[]>(`/users/${userId}/top/artists`, {
      query: options
    });

    return res.data.items;
  }

  async topTracksFromArtist(
    userId: string,
    artistId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<statsfm.TopTrack[]>(
      `/users/${userId}/top/artists/${artistId}/tracks`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async topAlbumsFromArtist(
    userId: string,
    artistId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get<statsfm.TopAlbum[]>(
      `/users/${userId}/top/artists/${artistId}/albums`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async topAlbums(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get<statsfm.TopAlbum[]>(`/users/${userId}/top/albums`, {
      query: options
    });

    return res.data.items;
  }

  async topTracksFromAlbums(
    userId: string,
    albumId: number,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get<statsfm.TopTrack[]>(
      `/users/${userId}/top/albums/${albumId}/tracks`,
      {
        query: options
      }
    );

    return res.data.items;
  }

  async topGenres(
    userId: string,
    options: (statsfm.QueryWithRange | statsfm.QueryWithDates) & statsfm.QueryWithOrder = {}
  ): Promise<statsfm.TopGenre[]> {
    const res = await this.http.get<statsfm.TopGenre[]>(`/users/${userId}/top/genres`, {
      query: options
    });

    return res.data.items;
  }

  async artistRecords(userId: string): Promise<statsfm.ArtistRecord[]> {
    const res = await this.http.get<statsfm.ArtistRecord[]>(`/users/${userId}/records/artists`, {
      query: {}
    });

    return res.data.items;
  }

  async friends(userId: string): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>(`/users/${userId}/friends`);

    // @ts-expect-error // TODO
    return res.data.data;
  }

  async friendCount(userId: string): Promise<number> {
    const res = await this.http.get<number>(`/users/${userId}/friends/count`);

    return res.data.item;
  }
}
