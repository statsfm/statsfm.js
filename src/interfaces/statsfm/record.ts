enum RecordType {
  'PLATINUM' = 'PLATINUM',
  'GOLD' = 'GOLD',
  'SILVER' = 'SILVER',
  'BRONZE' = 'BRONZE'
}

export interface StatsFMRecord {
  id: number;
  artistId: number;
  type: RecordType;
  active: boolean;
  userId: string;
  createdAt: Date;
}
