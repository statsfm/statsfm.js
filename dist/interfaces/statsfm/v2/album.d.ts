import { Artist } from './artist';
import { TopObject } from '../top';
export declare const AlbumReleaseType: {
    readonly SINGLE: "SINGLE";
    readonly ALBUM: "ALBUM";
    readonly COMPILATION: "COMPILATION";
    readonly EP: "EP";
};
export type AlbumReleaseType = (typeof AlbumReleaseType)[keyof typeof AlbumReleaseType];
export declare const AlbumReleaseImageSource: {
    readonly SPOTIFY: "SPOTIFY";
    readonly APPLEMUSIC: "APPLEMUSIC";
};
export type AlbumReleaseImageSource = (typeof AlbumReleaseImageSource)[keyof typeof AlbumReleaseImageSource];
export interface AlbumReleaseImage {
    id: number;
    url: string;
    height: number;
    width: number;
    animated: boolean;
    backgroundColor: string | null;
    textColors: string[];
    source: AlbumReleaseImageSource;
}
export interface AlbumRelease {
    id: number;
    primary: boolean;
    name: string;
    type: AlbumReleaseType;
    markets: string[];
    genres: string[];
    label: string | null;
    images: AlbumReleaseImage[];
    releasedAt: Date | string;
    totalTracks: number;
    albumId: number;
    artists: Artist[];
    isrc: string | null;
    upc: string | null;
    ean: string | null;
    spotifyId: string | null;
    spotifyPopularity: number | null;
    spotifyFetchedAt: Date | string | null;
    appleMusicId: string | null;
    appleMusicFetchedAt: Date | string | null;
}
export interface Album {
    id: number;
    primaryRelease: AlbumRelease;
}
export interface AlbumWithReleases extends Album {
    releases: AlbumRelease[];
}
export interface TopAlbum extends TopObject {
    album: Album;
}
