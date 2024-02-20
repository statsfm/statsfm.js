import { RawFile, RequestData } from '../../interfaces';
import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';
export default class MeManager extends Manager {
    get(): Promise<statsfm.UserPrivate>;
    updateMe(data: statsfm.UserPrivate): Promise<statsfm.UserPrivate>;
    uploadAvatar(file: File): Promise<{
        image: string;
    }>;
    deleteAccount(): Promise<unknown>;
    socialMediaConnections(): Promise<statsfm.UserSocialMediaConnection[]>;
    removeSocialMediaConnection(id: number): Promise<void>;
    privacySettings(): Promise<statsfm.UserPrivacySettings>;
    updatePrivacySettings(data: statsfm.UserPrivacySettings): Promise<statsfm.UserPrivacySettings>;
    customIdAvailable(data: string): Promise<boolean>;
    profile(): Promise<statsfm.UserProfile>;
    updateProfile(data: statsfm.UserProfile): Promise<statsfm.UserProfile>;
    imports(): Promise<statsfm.UserImport[]>;
    import(file: Required<RawFile>, platform: statsfm.AvailableService, requestData?: RequestData): Promise<statsfm.UserImport>;
    removeImport(id: number): Promise<void>;
    setConnectedServiceSettings(service: statsfm.AvailableService, settings: statsfm.ServiceSettings): Promise<void>;
    spotifyPlaylists(): Promise<statsfm.UserSpotifyPlaylist[]>;
    getGiftCode(code: string): Promise<statsfm.GiftCode>;
    updateGiftCode(giftCodeId: number, message: string | null): Promise<statsfm.GiftCode>;
    getGiftCodes(): Promise<statsfm.GiftCode[]>;
    redeemGiftCode(code: string): Promise<statsfm.GiftCode>;
    createSpotifyPlaylist(): Promise<statsfm.UserSpotifyPlaylist>;
    updateSpotifyPlaylist(data: statsfm.UserSpotifyPlaylist): Promise<statsfm.UserSpotifyPlaylist>;
    deleteSpotifyPlaylist(id: number): Promise<void>;
    devices(): Promise<statsfm.UserDevice[]>;
    soulmates(forceRefresh?: boolean): Promise<statsfm.Soulmate[]>;
    /**
     * @deprecated use {@link FriendsManager#get} instead
     */
    friends(): Promise<statsfm.UserPublic[]>;
    /**
     * @deprecated use {@link FriendsManager#getIncomingRequests} instead
     */
    incomingFriendRequests(): Promise<statsfm.UserPublic[]>;
    /**
     * @deprecated use {@link FriendsManager#getOutgoingRequests} instead
     */
    outgoingFriendRequests(): Promise<statsfm.UserPublic[]>;
    /**
     * @deprecated use {@link FriendsManager#sendRequest} instead
     * @param id
     */
    sendFriendRequest(id: string): Promise<boolean>;
    /**
     * @deprecated use {@link FriendsManager#cancelRequest} instead
     * @param id
     */
    cancelFriendRequest(id: string): Promise<boolean>;
    /**
     * @deprecated use {@link FriendsManager#acceptRequest} instead
     * @param id
     */
    acceptFriendRequest(id: string): Promise<boolean>;
    /**
     * @deprecated use {@link FriendsManager#denyRequest} instead
     * @param id
     */
    denyFriendRequest(id: string): Promise<boolean>;
    /**
     * @deprecated use {@link FriendsManager#remove} instead
     * @param id
     */
    removeFriend(id: string): Promise<boolean>;
    /**
     *
     * @param id
     * @deprecated use {@link FriendsManager#status} instead
     */
    friendStatus(id: string): Promise<statsfm.FriendStatus>;
}
