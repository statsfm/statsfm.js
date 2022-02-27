export interface TotalSizeData {
  count: number;
  date: string;
}

export interface TotalSizeItem {
  current: TotalSizeData;
  previous: TotalSizeData;
}

export interface TotalSize {
  users: TotalSizeItem;
  plusUsers: TotalSizeItem;
  streams: TotalSizeItem;
  tracks: TotalSizeItem;
  artists: TotalSizeItem;
  albums: TotalSizeItem;
}
