import { Track } from '.';
import { Album } from './album';
import { Artist } from './artist';

export enum SearchTypes {
  TRACK = 'artist',
  ARTIST = 'artist',
  ALBUM = 'artist'
}

export interface SearchResults {
  tracks?: Track[];
  artists?: Artist[];
  albums?: Album[];
}
