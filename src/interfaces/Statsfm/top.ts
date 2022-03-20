export enum Indicator {
  UP = 'UP',
  DOWN = 'DOWN',
  NEW = 'NEW',
  SAME = 'SAME',
  NONE = 'NONE'
}

export interface TopObject {
  position: number;
  streams: number;
  playedMs?: number;
  indicator: Indicator;
}
