import { AlbumSimple } from './album';
import { ArtistSimple } from './artist';
import { Object } from '..';
import { TopObject } from '../top';

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
