enum RecordType {
  'PLATINUM',

  'GOLD',

  'SILVER',

  'BRONZE'
}

export interface Record extends Object {
  id: number;
  type: RecordType;
  active: boolean;
  userId: string;
  createdAt: Date;
}

export interface ArtistRecord extends Object {
  artistId: number;
}
