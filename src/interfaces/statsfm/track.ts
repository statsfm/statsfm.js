import { AlbumRelease } from './album';
import { Artist } from './artist';
import { Object } from '.';
import { TopObject } from './top';

export interface TrackRelease {
  id: number;
  primary: boolean;
  name: string;
  durationMs: number;
  explicit: boolean;
  composerName?: string;
  trackNumber: number;
  discNumber: number;
  genres: string[];

  trackId: number;
  // track: Track; // relation

  // albumReleaseId: number;
  albumRelease: AlbumRelease;

  artists: Artist[];

  isrc?: string;
  upc?: string;
  ean?: string;

  spotifyId?: string;
  spotifyPreview?: string;
  spotifyPopularity?: number;
  spotifyFetchedAt?: Date;

  appleMusicId?: string;
  appleMusicPreview?: string;
  appleMusicFetchedAt?: Date;
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
