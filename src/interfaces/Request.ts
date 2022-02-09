export interface Response {
  success: boolean;
  status: number;
  statusText: string;
  url: string;
  headers: any;
  data: {
    item?: any;
    items?: any;
  };
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
