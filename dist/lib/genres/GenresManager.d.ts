import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class GenresManager extends Manager {
    get(tag: string): Promise<statsfm.v1.Genre>;
    list(tags: string[]): Promise<statsfm.v1.Genre[]>;
    artists(id: string): Promise<statsfm.v1.Artist[]>;
}
