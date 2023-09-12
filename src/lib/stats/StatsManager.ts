import { ItemResponse } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class StatsManager extends Manager {
  async databaseSize(): Promise<statsfm.DatabaseSize> {
    const res = await this.http.get<ItemResponse<statsfm.DatabaseSize>>(`/stats/database/size`);

    return {
      users: {
        current: {
          ...res.item.users.current,
          date: new Date(res.item.users.current.date)
        },
        previous: {
          ...res.item.users.previous,
          date: new Date(res.item.users.previous.date)
        }
      },
      plusUsers: {
        current: {
          ...res.item.plusUsers.current,
          date: new Date(res.item.plusUsers.current.date)
        },
        previous: {
          ...res.item.plusUsers.previous,
          date: new Date(res.item.plusUsers.previous.date)
        }
      },
      streams: {
        current: {
          ...res.item.streams.current,
          date: new Date(res.item.streams.current.date)
        },
        previous: {
          ...res.item.streams.previous,
          date: new Date(res.item.streams.previous.date)
        }
      },
      tracks: {
        current: {
          ...res.item.tracks.current,
          date: new Date(res.item.tracks.current.date)
        },
        previous: {
          ...res.item.tracks.previous,
          date: new Date(res.item.tracks.previous.date)
        }
      },
      artists: {
        current: {
          ...res.item.artists.current,
          date: new Date(res.item.artists.current.date)
        },
        previous: {
          ...res.item.artists.previous,
          date: new Date(res.item.artists.previous.date)
        }
      },
      albums: {
        current: {
          ...res.item.albums.current,
          date: new Date(res.item.albums.current.date)
        },
        previous: {
          ...res.item.albums.previous,
          date: new Date(res.item.albums.previous.date)
        }
      }
    };
  }
}
