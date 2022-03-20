export interface StreamStats {
  durationMs: number;
  count: number;
}

export interface DateStats {
  hours: Map<number, StreamStats>;
  weekDays: Map<number, StreamStats>;
  monthDays: Map<number, StreamStats>;
  months: Map<number, StreamStats>;
  years: Map<number, StreamStats>;
}

export interface ExtendedDateStats extends StreamStats {
  cardinality: {
    tracks: number;
    artists: number;
    albums: number;
  };
}

export interface PerDayStats {
  average: StreamStats;
  days: Map<Date, StreamStats>;
}
