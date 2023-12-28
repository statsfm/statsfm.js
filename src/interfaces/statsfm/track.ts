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

  albumReleaseId: number;
  albumRelease: AlbumRelease;

  artists: Artist[];

  isrc?: string;
  upc?: string;
  ean?: string;

  spotifyId?: string;
  spotifyPreview?: string;
  spotifyPopularity?: string;
  spotifyFetchedAt?: Date;

  appleMusicId?: string;
  appleMusicPreview?: string;
  appleMusicFetchedAt?: Date;
}

export interface Track extends Object {
  releases: TrackRelease[];
}

export interface RecentlyPlayedTrack {
  endTime: Date;
  platform: 'spotify' | 'appleMusic';
  track: Track;
}

export interface CurrentlyPlayingTrack {
  date: Date;
  isPlaying: boolean;
  progressMs: number;
  deviceName?: string;
  track: Track;
  platform: 'spotify' | 'appleMusic';
}

export interface TopTrack extends TopObject {
  track: Track;
}
