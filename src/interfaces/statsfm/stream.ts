import { tryParseInt } from '../../util/tryParseInt';

export interface Stream {
  id: string;
  userId: string;
  endTime: Date;
  playedMs: number;
  trackId: number;
  trackName: string;
  albumId: number;
  artistIds: number[];
  importId?: number;
  trackReleaseId?: number;
  albumReleaseId?: number;
  contextId?: string;
}

export interface StreamMinified {
  a: string;
  b: string;
  d: number;
  e: number;
  f: number;
  g: string;
  h: number;
  i: number[];
  j?: number;
  k?: number | string;
  l?: number | string;
  m?: string;
}

export const streamToStreamMinified = (stream: Stream): Omit<StreamMinified, 'a'> => {
  const obj: Omit<StreamMinified, 'a'> = {
    // a: stream.id,
    b: stream.userId,
    d: stream.endTime.getTime(),
    e: stream.playedMs,
    f: stream.trackId,
    g: stream.trackName,
    h: stream.albumId,
    i: stream.artistIds,
    k: tryParseInt(stream.trackReleaseId),
    l: tryParseInt(stream.albumReleaseId),
    m: stream.contextId ?? undefined
  };
  if ('importId' in stream) obj.j = stream.importId;
  return obj;
};

export const streamMinifiedToStream = (stream: StreamMinified): Stream => {
  const obj: Stream = {
    id: stream.a,
    userId: stream.b,
    endTime: new Date(stream.d),
    playedMs: stream.e,
    trackId: stream.f,
    trackName: stream.g,
    albumId: stream.h,
    artistIds: stream.i,
    trackReleaseId: tryParseInt(stream.k),
    albumReleaseId: tryParseInt(stream.l),
    contextId: stream.m ?? undefined
  };
  if ('j' in stream) obj.importId = stream.j;
  return obj;
};
