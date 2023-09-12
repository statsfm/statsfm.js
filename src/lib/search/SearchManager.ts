import { ItemsResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import { QueryWithPaging } from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class SearchManager extends Manager {
  async search(
    query: string,
    type: statsfm.SearchTypes[],
    options: QueryWithPaging = {}
  ): Promise<statsfm.SearchResults> {
    // TODO: implement paging
    const res = await this.http.get<ItemsResponse<statsfm.SearchResults>>(`/search`, {
      query: {
        query,
        type: type.join(','),
        ...options
      }
    });

    return {
      albums: res.items.albums
        ? res.items.albums.map((album) => ({
            ...album,
            releaseDate: new Date(album.releaseDate)
          }))
        : undefined,
      artists: res.items.artists ? res.items.artists : undefined,
      tracks: res.items.tracks ? res.items.tracks : undefined,
      users: res.items.users
        ? res.items.users.map((user) => ({
            ...user,
            createdAt: new Date(user.createdAt),
            ban: user.ban
              ? {
                  ...user.ban,
                  createdAt: new Date(user.ban.createdAt)
                }
              : null
          }))
        : undefined
    };
  }

  async searchElastic(
    query: string,
    type: statsfm.SearchTypes[],
    options: QueryWithPaging = {}
  ): Promise<statsfm.SearchResults> {
    // TODO: implement paging
    const res = await this.http.get<ItemsResponse<statsfm.SearchResults>>(`/search/elastic`, {
      query: {
        query,
        type: type.join(','),
        ...options
      }
    });

    return {
      albums: res.items.albums
        ? res.items.albums.map((album) => ({
            ...album,
            releaseDate: new Date(album.releaseDate)
          }))
        : undefined,
      artists: res.items.artists ? res.items.artists : undefined,
      tracks: res.items.tracks ? res.items.tracks : undefined,
      users: res.items.users
        ? res.items.users.map((user) => ({
            ...user,
            createdAt: new Date(user.createdAt),
            ban: user.ban
              ? {
                  ...user.ban,
                  createdAt: new Date(user.ban.createdAt)
                }
              : null
          }))
        : undefined
    };
  }
}
