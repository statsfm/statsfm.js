import { Object } from '.';
import { TopObject } from './top';

export enum ArtistImageSource {
  SPOTIFY = 'SPOTIFY',
  APPLEMUSIC = 'APPLEMUSIC'
}

export interface ArtistImage {
  id: number;
  url: string;
  height: number;
  width: number;
  animated: boolean;
  backgroundColor?: string;
  textColors: string[];
  source: ArtistImageSource;

  artistId: number;
  // artist: Artist; // relation
}

export interface Artist extends Object {
  genres: string[];
  images: ArtistImage[];

  spotifyId?: string;
  spotifyPopularity?: string;
  spotifyFetchedAt?: Date;

  appleMusicId?: string;
  appleMusicFetchedAt?: Date;

  // trackReleases: TrackRelease[]; // relation
  // albumReleases: AlbumRelease[]; // relation
}

export interface TopArtist extends TopObject {
  artist: Artist;
}
