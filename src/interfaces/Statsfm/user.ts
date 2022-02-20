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
}

export interface UserProfile {
  bio: string;
  pronouns?: string;
}

export enum OrderBySetting {
  'PLATFORM',
  'COUNT',
  'TIME'
}

export interface PublicUser {
  id: string;
  customId: string;
  displayName: string;
  image: string;
  isPlus: boolean;
  hasImported: boolean;
  orderBy: OrderBySetting;
  privacySettings?: UserPrivacySettings;
  profile?: UserProfile;
}

export interface PrivateUser extends PublicUser {
  email: string;
  country: string;
  imports?: UserImport[];
}
