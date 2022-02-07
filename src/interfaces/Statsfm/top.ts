export enum Indicator {
  UP = "UP",
  DOWN = "DOWN",
  NEW = "NEW",
  SAME = "SAME",
  NONE = "NONE",
}

export interface TopUser {
  position: number;
  streams: number;
  playedMs?: number;
  indicator: Indicator;
  user: any;
}

export interface TopObject {
  position: number;
  streams: number;
  playedMs?: number;
  indicator: Indicator;
}
