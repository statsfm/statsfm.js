import * as statsfm from '../../interfaces/statsfm';
import { RequestInitWithQuery } from '../../interfaces/Request';
import Manager from '../Manager';

export default class UsersManager extends Manager {
  async get(id: string, options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/users/${id}`, options);

    return res.data.item;
  }

  async privacySettings(
    id: string,
    options?: RequestInitWithQuery
  ): Promise<statsfm.UserPrivacySettings> {
    const res = await this.http.get(`/users/${id}/privacy`, options);

    return res.data.item;
  }

  async profile(id: string, options?: RequestInitWithQuery): Promise<statsfm.UserProfile> {
    const res = await this.http.get(`/users/${id}/profile`, options);

    return res.data.item;
  }

  async streams(id: string, options?: RequestInitWithQuery): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${id}/streams`, options);

    return res.data.items;
  }

  async recentStreams(
    id: string,
    options?: RequestInitWithQuery
  ): Promise<statsfm.RecentlyPlayedTrack[]> {
    const res = await this.http.get(`/users/${id}/streams/recent`, options);

    return res.data.items;
  }

  async stats(id: string, options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/users/${id}/streams/stats`, options);

    return res.data.items;
  }

  async trackStreams(
    id: string,
    trackId: number,
    options?: RequestInitWithQuery
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${id}/streams/tracks/${trackId}`, options);

    return res.data.items;
  }

  async trackStats(id: string, trackId: number, options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/users/${id}/streams/tracks/${trackId}/count`, options);

    return res.data.item;
  }

  async artistStreams(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${id}/streams/artists/${artistId}`, options);

    return res.data.items;
  }

  async artistStats(id: string, artistId: number, options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/users/${id}/streams/artists/${artistId}/stats`, options);

    return res.data.items;
  }

  async albumStreams(
    id: string,
    albumId: number,
    options?: RequestInitWithQuery
  ): Promise<statsfm.Stream[]> {
    const res = await this.http.get(`/users/${id}/streams/albums/${albumId}`, options);

    return res.data.items;
  }

  async albumStats(id: string, albumId: number, options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/users/${id}/streams/albums/${albumId}/stats`, options);

    return res.data.items;
  }

  async topTracks(id: string, options?: RequestInitWithQuery): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get(`/users/${id}/top/tracks`, options);

    return res.data.items;
  }

  async topArtists(id: string, options?: RequestInitWithQuery): Promise<statsfm.TopArtist[]> {
    const res = await this.http.get(`/users/${id}/top/artists`, options);

    return res.data.items;
  }

  async topTracksFromArtist(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get(`/users/${id}/top/artists/${artistId}/tracks`, options);

    return res.data.items;
  }

  async topAlbumsFromArtist(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get(`/users/${id}/top/artists/${artistId}/albums`, options);

    return res.data.items;
  }

  async topAlbums(id: string, options?: RequestInitWithQuery): Promise<statsfm.TopAlbum[]> {
    const res = await this.http.get(`/users/${id}/top/albums`, options);

    return res.data.items;
  }

  async topTracksFromAlbums(
    id: string,
    albumId: number,
    options?: RequestInitWithQuery
  ): Promise<statsfm.TopTrack[]> {
    const res = await this.http.get(`/users/${id}/top/albums/${albumId}/tracks`, options);

    return res.data.items;
  }
}
