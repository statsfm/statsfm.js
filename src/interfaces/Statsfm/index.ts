export * from './album';
export * from './artist';
export * from './audio-analysis';
export * from './audio-features';
export * from './database_size';
export * from './genre';
export * from './query';
export * from './search';
export * from './stats';
export * from './stream';
export * from './top';
export * from './track';
export * from './user';

export interface Object {
  id: number;
  updatedAt?: Date;
}
