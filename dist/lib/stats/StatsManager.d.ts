import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class StatsManager extends Manager {
    databaseSize(): Promise<statsfm.DatabaseSize>;
}
