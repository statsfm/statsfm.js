"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParseInt = exports.streamMinifiedToStream = exports.streamToStreamMinified = void 0;
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
        k: (0, exports.tryParseInt)(stream.trackReleaseId),
        l: (0, exports.tryParseInt)(stream.trackReleaseId),
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
        trackReleaseId: (0, exports.tryParseInt)(stream.k),
        albumReleaseId: (0, exports.tryParseInt)(stream.l),
        contextId: stream.m ?? undefined
    };
    if ('j' in stream)
        obj.importId = stream.j;
    return obj;
};
exports.streamMinifiedToStream = streamMinifiedToStream;
const tryParseInt = (str) => {
    try {
        if (typeof str === 'number')
            return str;
        if (str === null || str === undefined || str.trim() === '') {
            return undefined;
        }
        const parsedInt = parseInt(str);
        return isNaN(parsedInt) ? null : parsedInt;
    }
    catch (e) {
        return undefined;
    }
};
exports.tryParseInt = tryParseInt;
//# sourceMappingURL=stream.js.map