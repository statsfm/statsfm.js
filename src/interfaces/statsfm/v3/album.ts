import { Artist } from './artist';
import { TopObject } from '../top';
import { Platform } from '..';

export type ProviderAlbum = {
  providerId: string;
  providerName: string | Platform;
}

export const AlbumReleaseType = {
  SINGLE: 'SINGLE',
  ALBUM: 'ALBUM',
  COMPILATION: 'COMPILATION',
  EP: 'EP'
} as const;

export type AlbumReleaseType = (typeof AlbumReleaseType)[keyof typeof AlbumReleaseType];

export const AlbumReleaseImageSource = {
  SPOTIFY: 'SPOTIFY',
  APPLEMUSIC: 'APPLEMUSIC'
} as const;

export type AlbumReleaseImageSource =
  (typeof AlbumReleaseImageSource)[keyof typeof AlbumReleaseImageSource];

export interface AlbumReleaseImage {
  url: string;
  height: number;
  width: number;
  animated: boolean;
  backgroundColor: string | null;
  textColors: string[];
  source: AlbumReleaseImageSource;
}

export interface AlbumRelease {
  id: number;
  primary: boolean;
  name: string;
  type: AlbumReleaseType;
  markets: string[];
  genres: string[];
  label: string | null;
  images: AlbumReleaseImage[];
  releasedAt: Date | string;
  totalTracks: number;

  albumId: number;

  artists: Artist[];
  providerAlbum: ProviderAlbum[]

  isrc: string | null;
  upc: string | null;
  ean: string | null;

  spotifyPopularity: number | null;
  spotifyFetchedAt: Date | string | null;

  appleMusicFetchedAt: Date | string | null;
}

// /albums/:id
export interface Album {
  id: number;
  primaryRelease: AlbumRelease;
}

export interface AlbumWithReleases extends Album {
  releases: AlbumRelease[];
}

export interface TopAlbum extends TopObject {
  album: Album;
}
