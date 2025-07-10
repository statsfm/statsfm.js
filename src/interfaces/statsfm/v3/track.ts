import { AlbumRelease } from './album';
import { Artist } from './artist';
import { TopObject } from '../top';
import { Platform } from '..';

export type ProviderTrack = {
  providerId: string;
  providerName: string | Platform;
}

export interface TrackRelease {
  id: number;
  primary: boolean;
  name: string;
  durationMs: number;
  explicit: boolean;
  composerName: string | null;
  trackNumber: number;
  discNumber: number;
  genres: string[] | null;

  trackId: number;

  albumReleaseId: number;
  albumRelease: AlbumRelease;

  artists: Artist[];
  providerTrack: ProviderTrack[];

  isrc: string | null;
  upc: string | null;
  ean: string | null;

  spotifyPreview: string | null;
  spotifyPopularity: number | null;
  spotifyFetchedAt: Date | string | null;

  appleMusicPreview: string | null;
  appleMusicFetchedAt: Date | string | null;
}

export interface Track {
  id: number;
  primaryRelease: TrackRelease;
}

export interface TrackWithReleases extends Track {
  releases: TrackRelease[];
}

export interface RecentlyPlayedTrack {
  endTime: Date;
  platform: 'SPOTIFY' | 'APPLEMUSIC';
  track: Track;
}

export interface CurrentlyPlayingTrack {
  date: Date;
  isPlaying: boolean;
  progressMs: number;
  deviceName?: string;
  track: Track;
  platform: 'SPOTIFY' | 'APPLEMUSIC';
}

export interface TopTrack extends TopObject {
  track: Track;
}
