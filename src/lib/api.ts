import { Config } from '../interfaces/Config';
import AlbumsManager from './albums/AlbumsManager';
import ArtistsManager from './artists/ArtistsManager';
import ChartsManager from './charts/ChartsManager';
import GenresManager from './genres/GenresManager';
import { HttpClient } from './http/HttpManager';
import MeManager from './me/MeManager';
import SearchManager from './search/SearchManager';
import StatsManager from './stats/StatsManager';
import TracksManager from './tracks/TracksManager';
import UsersManager from './users/UsersManager';

export default class Api {
  http: HttpClient;

  artists: ArtistsManager;

  albums: AlbumsManager;

  charts: ChartsManager;

  genres: GenresManager;

  me: MeManager;

  search: SearchManager;

  stats: StatsManager;

  tracks: TracksManager;

  users: UsersManager;

  constructor(config: Config) {
    if (!config.baseUrl) {
      config.baseUrl = 'https://api.stats.fm/api/v1';
    }
    this.http = new HttpClient(config);
    this.artists = new ArtistsManager(this.http);
    this.albums = new AlbumsManager(this.http);
    this.charts = new ChartsManager(this.http);
    this.genres = new GenresManager(this.http);
    this.me = new MeManager(this.http);
    this.search = new SearchManager(this.http);
    this.stats = new StatsManager(this.http);
    this.tracks = new TracksManager(this.http);
    this.users = new UsersManager(this.http);
  }
}
