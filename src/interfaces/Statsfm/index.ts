import { Album, AlbumSimple, TopAlbum } from "./album";
import { Artist, ArtistSimple, TopArtist } from "./artist";
import { AudioAnalysis } from "./audio-analysis";
import { AudioFeatures } from "./audio-features";
import { TopObject } from "./top";
import { Track, RecentlyPlayedTrack, TopTrack } from "./track";
import {
  Stream,
  StreamMinified,
  StreamMinifiedToStream,
  StreamToStreamMinified,
} from "./stream";

export interface Object {
  id: number;
  updatedAt?: Date;
}

export {
  TopObject,
  Album,
  AlbumSimple,
  TopAlbum,
  Artist,
  ArtistSimple,
  TopArtist,
  Track,
  RecentlyPlayedTrack,
  TopTrack,
  Stream,
  StreamMinified,
  StreamMinifiedToStream,
  StreamToStreamMinified,
  AudioAnalysis,
  AudioFeatures,
};
