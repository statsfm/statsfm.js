import { TopObject } from '../top';
import { Platform } from '..';

export type ProviderArtist = {
  providerId: string;
  providerName: string | Platform;
};

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
  providerArtist: ProviderArtist[];

  spotifyPopularity?: number;
  spotifyFollowers?: number;
  spotifyFetchedAt?: Date;

  appleMusicFetchedAt?: Date;

  // trackReleases: TrackRelease[]; // relation
  // albumReleases: AlbumRelease[]; // relation
}

export interface TopArtist extends TopObject {
  artist: Artist;
}
