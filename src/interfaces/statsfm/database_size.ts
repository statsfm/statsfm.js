export interface DatabaseSizeItemCount {
  count: number;
  date: Date;
}

export interface DatabaseSizeItem {
  current: DatabaseSizeItemCount;
  previous: DatabaseSizeItemCount;
}

export interface DatabaseSize {
  users: DatabaseSizeItem;
  plusUsers: DatabaseSizeItem;
  streams: DatabaseSizeItem;
  tracks: DatabaseSizeItem;
  artists: DatabaseSizeItem;
  albums: DatabaseSizeItem;
}
