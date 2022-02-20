import { Object } from '.';
import { ArtistSimple } from './artist';

export interface GenreSimple extends Object {
  tag: string;
}

export interface Genre extends GenreSimple {
  artists: ArtistSimple[];
  related: GenreSimple[];
  sub: GenreSimple[];
}
