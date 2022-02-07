import { RequestInitWithQuery } from "../../interfaces/Request";
import Manager from "../Manager";

export default class UsersManager extends Manager {
  async get(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}`, options);

    return res.data.item;
  }

  async getStreams(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/streams`, options);

    return res.data.items;
  }

  async getRecentStreams(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/streams/recent`, options);

    return res.data.items;
  }

  async getCount(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/streams/count`, options);

    return res.data.item;
  }

  async getDuration(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/streams/duration`, options);

    return res.data.item;
  }

  async getTrackStreams(
    id: string,
    trackId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/tracks/${trackId}`,
      options
    );

    return res.data.items;
  }

  async getTrackCount(
    id: string,
    trackId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/tracks/${trackId}/count`,
      options
    );

    return res.data.item;
  }

  async getTrackDuration(
    id: string,
    trackId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/tracks/${trackId}/duration`,
      options
    );

    return res.data.item;
  }

  async getArtistStreams(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/artists/${artistId}`,
      options
    );

    return res.data.items;
  }

  async getArtistCount(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/artists/${artistId}/count`,
      options
    );

    return res.data.item;
  }

  async getArtistDuration(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/artists/${artistId}/duration`,
      options
    );

    return res.data.item;
  }

  async getAlbumStreams(
    id: string,
    albumId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/albums/${albumId}`,
      options
    );

    return res.data.items;
  }

  async getAlbumCount(
    id: string,
    albumId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/albums/${albumId}/count`,
      options
    );

    return res.data.item;
  }

  async getAlbumDuration(
    id: string,
    albumId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/streams/albums/${albumId}/duration`,
      options
    );

    return res.data.item;
  }

  async getTopTracks(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/top/tracks`, options);

    return res.data.items;
  }

  async getTopArtists(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/top/artists`, options);

    return res.data.items;
  }

  async getTopTracksFromArtist(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/top/artists/${artistId}/tracks`,
      options
    );

    return res.data.items;
  }

  async getTopAlbumsFromArtist(
    id: string,
    artistId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/top/artists/${artistId}/albums`,
      options
    );

    return res.data.items;
  }

  async getTopAlbums(id: string, options?: RequestInitWithQuery) {
    const res = await this.http.get(`/users/${id}/top/albums`, options);

    return res.data.items;
  }

  async getTopTracksFromAlbums(
    id: string,
    albumId: number,
    options?: RequestInitWithQuery
  ) {
    const res = await this.http.get(
      `/users/${id}/top/albums/${albumId}/tracks`,
      options
    );

    return res.data.items;
  }
}
