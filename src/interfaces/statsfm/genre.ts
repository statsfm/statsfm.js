import { Object } from '.';
import { ArtistSimple } from './artist';
import { TopObject } from './top';

export interface GenreSimple extends Object {
  tag: string;
}

export interface Genre extends GenreSimple {
  artists: ArtistSimple[];
  related: GenreSimple[];
  sub: GenreSimple[];
}

export interface TopGenre extends TopObject {
  genre: GenreSimple;
  artistCount?: number;
}
