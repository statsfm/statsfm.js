enum CrownType {
  'PLATINUM',

  'GOLD',

  'SILVER',

  'BRONZE'
}

export interface Crown extends Object {
  id: number;
  type: CrownType;
  active: boolean;
  userId: string;
  createdAt: Date;
}

export interface ArtistCrown extends Object {
  artistId: number;
}
