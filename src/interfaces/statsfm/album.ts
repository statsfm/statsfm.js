/* eslint-disable deprecation/deprecation */
import { ArtistSimple } from './artist';
import { Object } from '..';
import { TopObject } from './top';

/**
 * @deprecated Use `v1.AlbumSimple` instead.
 */
export interface AlbumSimple extends Object {
  name: string;
  image: string;
}

/**
 * @deprecated Use `v1.Album` instead.
 */
export interface Album extends AlbumSimple {
  label: string;
  spotifyPopularity: number;
  totalTracks: number;
  releaseDate: Date | number;
  genres: string[];
  artists: ArtistSimple[];
  externalIds: Record<string, unknown> & { spotify?: string[]; appleMusic?: string[] };
  type: 'single' | 'complication' | 'album';
}

/**
 * @deprecated Use `v1.TopAlbum` instead.
 */
export interface TopAlbum extends TopObject {
  album: Album;
}
