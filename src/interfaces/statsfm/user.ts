import { Platform } from '.';
import { TopObject } from './top';

export enum OrderBySetting {
  /**
   * @deprecated Use SPOTIFY or APPLEMUSIC instead
   */
  'PLATFORM' = 'PLATFORM',
  'COUNT' = 'COUNT',
  'TIME' = 'TIME',
  'SPOTIFY' = 'SPOTIFY',
  'APPLEMUSIC' = 'APPLEMUSIC'
}

export interface UserImport {
  hash: string;
  id: number;
  userId: string;
  path: string;
  count: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  serverId: number;
  error: string | null;
  name: string | null;
  service?: Platform;
}

export interface UserSpotifyPlaylist {
  id: number;
  userId: string;
  createdAt: Date;
  syncedAt: Date;
  size: number;
  spotifyId: string;
  range?: Range;
  rangeInDays?: number;
  error?: string;
  syncEnabled: boolean;
  name?: string;
  orderBy?: OrderBySetting;
}

export interface UserDeviceNotifications {
  imports: boolean;
  friends: boolean;
  weeklySummary: boolean;
  monthlySummary: boolean;
  updates: boolean;
}
export interface UserDevice {
  id: number;
  userId: string;
  createdAt: Date;
  lastUsed: Date;
  name: string;
  model: string;
  type: string;
  notifications: UserDeviceNotifications;
  fcmToken?: string;
}

export interface SocialMediaPlatform {
  name: string;
  icon: string;
}

export interface UserSocialMediaConnection {
  id: number;
  verified: boolean;
  platformUserId: string;
  platformUsername: string;
  platformUserImage: string;
  platform: SocialMediaPlatform;
}

export interface UserPrivacySettings {
  profile: boolean;
  currentlyPlaying: boolean;
  recentlyPlayed: boolean;
  topTracks: boolean;
  topArtists: boolean;
  topAlbums: boolean;
  topGenres: boolean;
  streams: boolean;
  streamStats: boolean;
  leaderboards: boolean;
  friends: boolean;
  connections: boolean;
}

export interface UserProfile {
  bio: string;
  theme: string;
  pronouns?: string | null;
}

export interface UserBan {
  active: boolean;
  createdAt: Date;
}

export interface ServiceSettings {
  hasImported?: boolean;
  sync?: boolean;
}

export interface UserSpotifyAuth {
  displayName: string;
  disabled: boolean;
  email?: string;
  image?: string;
  syncedAt?: Date;
  country?: string;
  product?: string;
  platformUserId: string;
  sync: boolean;
  imported: boolean;
}

export interface UserAppleMusicAuth {
  disabled: boolean;
  email?: string;
  emailVerified: boolean;
  appleUserId: string;
  sync: boolean;
  imported: boolean;
  syncedAt?: Date;
  tokenExpired: boolean;
  availableYears: number[];
}

export interface UserPublic {
  id: string;
  customId: string;
  displayName: string;
  image?: string;
  isPlus: boolean;
  isPro: boolean;
  /**
   * @deprecated use the `spotifyAuth` and `appleMusicAuth` fields instead
   */
  hasImported: boolean;
  /**
   * @deprecated use the `spotifyAuth` and `appleMusicAuth` fields instead
   */
  syncEnabled: boolean;
  orderBy: OrderBySetting;
  timezone?: string;
  privacySettings?: UserPrivacySettings;
  profile?: UserProfile;
  socialMediaConnections: UserSocialMediaConnection[];
  userBan: UserBan | null;
  quarantined: boolean;
  appleMusicAuth: Pick<
    UserAppleMusicAuth,
    'sync' | 'imported' | 'availableYears' | 'disabled'
  > | null;
  spotifyAuth: Pick<
    UserSpotifyAuth,
    'displayName' | 'platformUserId' | 'image' | 'product' | 'sync' | 'imported' | 'disabled'
  > | null;
}

export interface UserPrivate extends UserPublic {
  email?: string | null;
  country: string;
  /**
   * @deprecated use the `spotifyAuth` and `appleMusicAuth` fields instead
   */
  disabled: boolean;
  appleMusicAuth: UserAppleMusicAuth | null;
  spotifyAuth: UserSpotifyAuth | null;
}

export interface TopUser extends TopObject {
  user: UserPublic;
}
