import { Artist } from './artist';
import { Object, TrackRelease } from '.';
import { TopObject } from './top';

export enum AlbumReleaseType {
  SINGLE,
  ALBUM,
  COMPILATION,
  EP
}

export enum AlbumReleaseImageSource {
  SPOTIFY,
  APPLEMUSIC
}

export interface AlbumReleaseImage {
  id: number;
  url: string;
  height: number;
  width: number;
  animated: boolean;
  backgroundColor?: string;
  textColors: string[];
  source: AlbumReleaseImageSource;

  // albumReleaseId: number;
  // albumRelease: AlbumRelease; // relation
}

export interface AlbumRelease {
  id: number;
  primary: boolean;
  name: string;
  type: AlbumReleaseType;
  markets: string[];
  genres: string[];
  images: AlbumReleaseImage[];
  releasedAt: Date;
  totalTracks: number;

  albumId: number;
  // album: Album; // relation

  artists: Artist[];
  // trackReleases: TrackRelease[]; // relation

  isrc?: string;
  upc?: string;
  ean?: string;

  spotifyId?: string;
  spotifyPopularity?: number;
  spotifyFetchedAt?: Date;

  appleMusicId?: string;
  appleMusicFetchedAt?: Date;
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
