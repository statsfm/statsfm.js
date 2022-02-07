import { Object } from ".";
import { TopObject } from "./top";

export interface ArtistSimple extends Object {
  name: string;
}

export interface Artist extends ArtistSimple {
  followers: number;
  image: string;
  spotifyPopularity: number;
  externalIds: Record<string, unknown> & { spotify?: string[] };
  genres: string[];
}

export interface TopArtist extends TopObject {
  artist: Artist;
}
