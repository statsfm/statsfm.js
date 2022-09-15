import { ArtistSimple } from './artist';
import { Object } from '.';
import { TopObject } from './top';

export interface AlbumSimple extends Object {
  name: string;
  image: string;
}

export interface Album extends AlbumSimple {
  label: string;
  spotifyPopularity: number;
  totalTracks: number;
  releaseDate: Date;
  genres: string[];
  artists: ArtistSimple[];
  externalIds: Record<string, unknown> & { spotify?: string[]; appleMusic?: string[] };
  type: 'single' | 'complication' | 'album';
}

export interface TopAlbum extends TopObject {
  album: Album;
}
