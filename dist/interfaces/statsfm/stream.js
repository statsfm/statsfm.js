"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamMinifiedToStream = exports.streamToStreamMinified = void 0;
const streamToStreamMinified = (stream) => {
    const obj = {
        // a: stream.id,
        b: stream.userId,
        d: stream.endTime.getTime(),
        e: stream.playedMs,
        f: stream.trackId,
        g: stream.trackName,
        h: stream.albumId,
        i: stream.artistIds,
        k: stream.trackReleaseId ?? undefined,
        l: stream.albumReleaseId ?? undefined,
        m: stream.contextId ?? undefined
    };
    if ('importId' in stream)
        obj.j = stream.importId;
    return obj;
};
exports.streamToStreamMinified = streamToStreamMinified;
const streamMinifiedToStream = (stream) => {
    const obj = {
        id: stream.a,
        userId: stream.b,
        endTime: new Date(stream.d),
        playedMs: stream.e,
        trackId: stream.f,
        trackName: stream.g,
        albumId: stream.h,
        artistIds: stream.i,
        trackReleaseId: stream.k ?? undefined,
        albumReleaseId: stream.l ?? undefined,
        contextId: stream.m ?? undefined
    };
    if ('j' in stream)
        obj.importId = stream.j;
    return obj;
};
exports.streamMinifiedToStream = streamMinifiedToStream;
//# sourceMappingURL=stream.js.map