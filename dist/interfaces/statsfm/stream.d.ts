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
export declare const streamToStreamMinified: (stream: Stream) => Omit<StreamMinified, 'a'>;
export declare const streamMinifiedToStream: (stream: StreamMinified) => Stream;
export declare const tryParseInt: (str: string | number | null | undefined) => number | null;
