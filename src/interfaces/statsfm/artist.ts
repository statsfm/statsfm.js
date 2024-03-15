/* eslint-disable deprecation/deprecation */
import { Object } from '..';
import { TopObject } from './top';

/**
 * @deprecated Use `v1.ArtistSimple` instead.
 */
export interface ArtistSimple extends Object {
  name: string;
}

/**
 * @deprecated Use `v1.Artist` instead.
 */
export interface Artist extends ArtistSimple {
  followers: number;
  image?: string;
  spotifyPopularity: number;
  externalIds: Record<string, unknown> & { spotify?: string[]; appleMusic?: string[] };
  genres: string[];
}

/**
 * @deprecated Use `v1.TopArtist` instead.
 */
export interface TopArtist extends TopObject {
  artist: Artist;
}
