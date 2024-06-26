import { TopObject } from '../top';

export const ArtistImageSource = {
  SPOTIFY: 'SPOTIFY',
  APPLEMUSIC: 'APPLEMUSIC'
} as const;

export type ArtistImageSource = (typeof ArtistImageSource)[keyof typeof ArtistImageSource];

export interface ArtistImage {
  url: string;
  height: number;
  width: number;
  animated: boolean;
  backgroundColor?: string;
  textColors: string[];
  source: ArtistImageSource;

  // artistId: number;
  // artist: Artist; // relation
}

export interface Artist {
  id: number;
  name: string;
  genres: string[];
  images: ArtistImage[];

  spotifyId?: string;
  spotifyPopularity?: number;
  spotifyFollowers?: number;
  spotifyFetchedAt?: Date;

  appleMusicId?: string;
  appleMusicFetchedAt?: Date;

  // trackReleases: TrackRelease[]; // relation
  // albumReleases: AlbumRelease[]; // relation
}

export interface TopArtist extends TopObject {
  artist: Artist;
}
