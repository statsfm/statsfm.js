/* eslint-disable deprecation/deprecation */
import { AlbumSimple } from './album';
import { ArtistSimple } from './artist';
import { Object } from '..';
import { TopObject } from './top';

/**
 * @deprecated Use `v1.Track` instead.
 */
export interface Track extends Object {
  name: string;
  explicit: boolean;
  durationMs: number;
  spotifyPopularity: number;
  spotifyPreview?: string;
  externalIds: Record<string, unknown> & { spotify?: string[]; appleMusic?: string[] };
  albums: AlbumSimple[];
  artists: ArtistSimple[];
}
/**
 * @deprecated Use `v1.TopTrack` instead.
 */
export interface RecentlyPlayedTrack {
  endTime: Date;
  platform: 'SPOTIFY' | 'APPLEMUSIC';
  track: Track;
}

/**
 * @deprecated Use `v1.CurrentlyPlayingTrack` instead.
 */
export interface CurrentlyPlayingTrack {
  date: Date;
  isPlaying: boolean;
  progressMs: number;
  deviceName?: string;
  track: Track;
  platform: 'SPOTIFY' | 'APPLEMUSIC';
}

/**
 * @deprecated Use `v1.TopTrack` instead.
 */
export interface TopTrack extends TopObject {
  track: Track;
}
