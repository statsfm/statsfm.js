import { Album, AlbumSimple, TopAlbum } from './album';
import { Artist, ArtistSimple, TopArtist } from './artist';
import { AudioAnalysis } from './audio-analysis';
import { AudioFeatures } from './audio-features';
import { Stream, StreamMinified, StreamMinifiedToStream, StreamToStreamMinified } from './stream';
import { TopObject } from './top';
import { RecentlyPlayedTrack, TopTrack, Track } from './track';
import { UserImport } from './user';

export interface Object {
  id: number;
  updatedAt?: Date;
}

export {
  UserImport,
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
  AudioFeatures
};
