import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class FriendsManager extends Manager {
    get(): Promise<statsfm.UserPublic[]>;
    getIncomingRequests(): Promise<statsfm.UserPublic[]>;
    getOutgoingRequests(): Promise<statsfm.UserPublic[]>;
    sendRequest(id: string): Promise<boolean>;
    cancelRequest(id: string): Promise<boolean>;
    acceptRequest(id: string): Promise<boolean>;
    denyRequest(id: string): Promise<boolean>;
    remove(id: string): Promise<boolean>;
    block(id: string): Promise<boolean>;
    blockStatus(id: string): Promise<boolean>;
    status(id: string): Promise<statsfm.FriendStatus>;
}
