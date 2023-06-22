import { DefaultOptions } from '../util/constants';
import { Options } from '../interfaces/Options';
import AlbumsManager from './albums/AlbumsManager';
import ArtistsManager from './artists/ArtistsManager';
import ChartsManager from './charts/ChartsManager';
import GenresManager from './genres/GenresManager';
import { HttpManager } from './http/HttpManager';
import MeManager from './me/MeManager';
import SearchManager from './search/SearchManager';
import StatsManager from './stats/StatsManager';
import TracksManager from './tracks/TracksManager';
import UsersManager from './users/UsersManager';
import { RecursivePartial } from '../interfaces';
import { mergeDefault } from '../util/mergeDefaults';

export default class Api {
  http: HttpManager;

  artists: ArtistsManager;

  albums: AlbumsManager;

  charts: ChartsManager;

  genres: GenresManager;

  me: MeManager;

  search: SearchManager;

  stats: StatsManager;

  tracks: TracksManager;

  users: UsersManager;

  options: Options;

  constructor(options: RecursivePartial<Options> = {}) {
    this.options = mergeDefault(DefaultOptions, options) as Options;

    this.http = new HttpManager(this.options);
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
