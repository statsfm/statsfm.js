export interface Response<T> {
  success: boolean;
  status: number;
  statusText: string;
  url: string;
  headers: any;
  data: T extends any[] ? { items: T } : { item: T };
}

export interface QueryParams extends Record<string, any> {
  range?: 'weeks' | 'months' | 'lifetime' | string;
  ids?: string;
  query?: string;
  before?: number;
  after?: number;
  limit?: number;
  offset?: number;
}

export interface RequestInitWithQuery extends RequestInit {
  query?: QueryParams;
}
