import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class ChartsManager extends Manager {
    topTracks(options?: statsfm.QueryWithRange): Promise<statsfm.v1.TopTrack[]>;
    topArtists(options?: statsfm.QueryWithRange): Promise<statsfm.v1.TopArtist[]>;
    topAlbums(options?: statsfm.QueryWithRange): Promise<statsfm.v1.TopAlbum[]>;
    topUsers(options?: statsfm.QueryWithRange): Promise<statsfm.TopUser[]>;
}
