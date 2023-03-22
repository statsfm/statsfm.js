import { Track, UserPublic } from '.';
import { Album } from './album';
import { Artist } from './artist';

export enum SearchTypes {
  TRACK = 'track',
  ARTIST = 'artist',
  ALBUM = 'album',
  USER = 'user'
}

export interface SearchResults {
  tracks?: Track[];
  artists?: Artist[];
  albums?: Album[];
  users?: UserPublic[];
}
