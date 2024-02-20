import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class RecordsManager extends Manager {
    getArtistRecords(recordId: number): Promise<statsfm.StatsFMRecord>;
    listArtistRecords(recordIds: number[]): Promise<statsfm.StatsFMRecord>;
    getArtistRecordHistory(recordId: number): Promise<statsfm.StatsFMRecord>;
}
