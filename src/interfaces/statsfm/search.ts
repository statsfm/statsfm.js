import { UserPublic } from './user';
import { Album, Artist, Track } from './v1';

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
