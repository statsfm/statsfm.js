import { Config } from '../interfaces/Config';
import AlbumsManager from './albums/AlbumsManager';
import ArtistsManager from './artists/ArtistsManager';
import GenresManager from './genres/GenresManager';
import { HttpClient } from './http/HttpManager';
import MeManager from './me/MeManager';
import SearchManager from './search/SearchManager';
import StatsManager from './stats/StatsManager';
import TracksManager from './tracks/TracksManager';
import UsersManager from './users/UsersManager';

export default class Api {
  http: HttpClient;

  tracks: TracksManager;

  albums: AlbumsManager;

  artists: ArtistsManager;

  genres: GenresManager;

  users: UsersManager;

  me: MeManager;

  stats: StatsManager;

  search: SearchManager;

  constructor(config: Config) {
    if (!config.baseUrl) {
      config.baseUrl = 'https://api.stats.fm/api/v1';
    }
    this.http = new HttpClient(config);
    this.tracks = new TracksManager(config);
    this.albums = new AlbumsManager(config);
    this.artists = new ArtistsManager(config);
    this.genres = new GenresManager(config);
    this.users = new UsersManager(config);
    this.me = new MeManager(config);
    this.stats = new StatsManager(config);
    this.search = new SearchManager(config);
  }
}
