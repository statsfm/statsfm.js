export interface StreamStats {
  durationMs: number;
  count: number;
}

export interface DateStats {
  hours: Record<number, StreamStats>;
  weekDays: Record<number, StreamStats>;
  monthDays: Record<number, StreamStats>;
  months: Record<number, StreamStats>;
  years: Record<number, StreamStats>;
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
  days: Record<string, StreamStats>;
}
