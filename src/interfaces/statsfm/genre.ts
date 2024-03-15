/* eslint-disable deprecation/deprecation */
import { Object } from '..';
import { ArtistSimple, TopArtist } from './artist';
import { TopObject } from './top';

/**
 * @deprecated Use `v1.GenreSimple` instead.
 */
export interface GenreSimple extends Object {
  tag: string;
}

/**
 * @deprecated Use `v1.Genre` instead.
 */
export interface Genre extends GenreSimple {
  artists: ArtistSimple[];
  related: GenreSimple[];
  sub: GenreSimple[];
}

/**
 * @deprecated Use `v1.TopGenre` instead.
 */
export interface TopGenre extends TopObject {
  genre: GenreSimple;
  artistCount?: number;
  previewArtists: TopArtist[];
}
