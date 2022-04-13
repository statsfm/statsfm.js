import { Track } from '.';
import { Album } from './album';
import { Artist } from './artist';

export enum SearchTypes {
  TRACK = 'track',
  ARTIST = 'artist',
  ALBUM = 'album'
}

export interface SearchResults {
  tracks?: Track[];
  artists?: Artist[];
  albums?: Album[];
}
