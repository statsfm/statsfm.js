"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../util/constants");
const AlbumsManager_1 = __importDefault(require("./albums/AlbumsManager"));
const ArtistsManager_1 = __importDefault(require("./artists/ArtistsManager"));
const ChartsManager_1 = __importDefault(require("./charts/ChartsManager"));
const FriendsManager_1 = __importDefault(require("./friends/FriendsManager"));
const GenresManager_1 = __importDefault(require("./genres/GenresManager"));
const HttpManager_1 = require("./http/HttpManager");
const MeManager_1 = __importDefault(require("./me/MeManager"));
const RecordsManager_1 = __importDefault(require("./records/RecordsManager"));
const SearchManager_1 = __importDefault(require("./search/SearchManager"));
const StatsManager_1 = __importDefault(require("./stats/StatsManager"));
const TracksManager_1 = __importDefault(require("./tracks/TracksManager"));
const UsersManager_1 = __importDefault(require("./users/UsersManager"));
const mergeDefaults_1 = require("../util/mergeDefaults");
class Api {
    constructor(options = {}) {
        this.options = (0, mergeDefaults_1.mergeDefault)(constants_1.DefaultOptions, options);
        this.http = new HttpManager_1.HttpManager(this.options);
        this.artists = new ArtistsManager_1.default(this.http);
        this.albums = new AlbumsManager_1.default(this.http);
        this.charts = new ChartsManager_1.default(this.http);
        this.friends = new FriendsManager_1.default(this.http);
        this.genres = new GenresManager_1.default(this.http);
        this.me = new MeManager_1.default(this.http);
        this.records = new RecordsManager_1.default(this.http);
        this.search = new SearchManager_1.default(this.http);
        this.stats = new StatsManager_1.default(this.http);
        this.tracks = new TracksManager_1.default(this.http);
        this.users = new UsersManager_1.default(this.http);
    }
}
exports.default = Api;
//# sourceMappingURL=api.js.map