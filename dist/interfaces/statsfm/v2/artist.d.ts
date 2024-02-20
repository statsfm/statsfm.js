import { TopObject } from '../top';
export declare const ArtistImageSource: {
    readonly SPOTIFY: "SPOTIFY";
    readonly APPLEMUSIC: "APPLEMUSIC";
};
export type ArtistImageSource = (typeof ArtistImageSource)[keyof typeof ArtistImageSource];
export interface ArtistImage {
    id: number;
    url: string;
    height: number;
    width: number;
    animated: boolean;
    backgroundColor?: string;
    textColors: string[];
    source: ArtistImageSource;
}
export interface Artist {
    id: number;
    name: string;
    genres: string[];
    images: ArtistImage[];
    spotifyId?: string;
    spotifyPopularity?: number;
    spotifyFetchedAt?: Date;
    appleMusicId?: string;
    appleMusicFetchedAt?: Date;
}
export interface TopArtist extends TopObject {
    artist: Artist;
}
