import { Artist, TopArtist } from './artist';
import { TopObject } from '../top';

export interface GenreSimple {
  tag: string;
}

export interface Genre extends GenreSimple {
  artists: Artist[];
  related: GenreSimple[];
  sub: GenreSimple[];
}

export interface TopGenre extends TopObject {
  genre: GenreSimple;
  artistCount?: number;
  previewArtists: TopArtist[];
}
