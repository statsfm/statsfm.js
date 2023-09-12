import { TopObject } from './top';

export enum OrderBySetting {
  'PLATFORM',
  'COUNT',
  'TIME'
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

export interface UserPublic {
  id: string;
  customId: string;
  displayName: string;
  image?: string;
  isPlus: boolean;
  isPro: boolean;
  hasImported: boolean;
  syncEnabled: boolean;
  orderBy: OrderBySetting;
  timezone?: string;
  privacySettings?: UserPrivacySettings;
  profile?: UserProfile;
  socialMediaConnections: UserSocialMediaConnection[];
  ban: UserBan | null;
  quarantined: boolean;
}

export interface UserPrivate extends UserPublic {
  email: string;
  country: string;
  disabled: boolean;
}

export interface TopUser extends TopObject {
  user: UserPublic;
}
