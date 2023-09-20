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

export enum ConnectedServiceStatus {
  CONNECTED = 0,
  DISABLED = 1,
  TOKEN_EXPIRED = 2,
  DISABLED_AND_TOKEN_EXPIRED = 3
}

export interface SpotifyAuth {
  disabled: boolean;
  email: string;
  displayName: string;
  platformUserId: string;
  image?: string;
  country: string;
  syncStreams: boolean;
  imported: boolean;
}

export interface AppleMusicAuth {
  disabled: boolean;
  email: string;
  emailVerified: boolean;
  appleUserId: string;
  syncStreams: boolean;
  imported: boolean;
}

export interface AuthConnections {
  spotify: SpotifyAuth;
  appleMusic: AppleMusicAuth;
}

export interface ServiceSettings {
  hasImported?: boolean;
  sync?: boolean;
}

export type StreamingService<Private extends boolean = false> = {
  connected: boolean;
  hasImported: boolean;
  platformId?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
} & (Private extends true ? { status: ConnectedServiceStatus } : {});

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
  userBan: UserBan | null;
  quarantined: boolean;
  connectedServices: {
    spotify: StreamingService<false>;
    appleMusic: StreamingService<false>;
  };
}

export interface UserPrivate extends UserPublic {
  email?: string | null;
  country: string;
  disabled: boolean;
  connectedServices: {
    spotify: StreamingService<true>;
    appleMusic: StreamingService<true>;
  };
}

export interface TopUser extends TopObject {
  user: UserPublic;
}
