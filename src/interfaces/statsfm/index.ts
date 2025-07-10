export * from './audio-analysis';
export * from './audio-features';
export * from './database_size';
export * from './friend_status';
export * from './giftCode';
export * from './query';
export * from './record';
export * from './search';
export * from './soulmate';
export * from './stats';
export * from './stream';
export * from './top';
export * from './user';
export * from './album';
export * from './artist';
export * from './genre';
export * from './track';

export interface Object {
  id: number;
  updatedAt?: Date;
}

export enum Platform {
  SPOTIFY = 'SPOTIFY',
  APPLEMUSIC = 'APPLEMUSIC'
}

export * as v1 from './v1';
export * as v2 from './v2';
export * as v3 from './v3';
