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
  userId?: string;
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
  userId?: string;
  bio: string;
  pronouns?: string;
}
