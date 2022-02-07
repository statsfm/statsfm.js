export interface Response<T = any> {
  success: boolean;
  status: number;
  statusText: string;
  url: string;
  headers: any;
  data: any;
}

export interface QueryParams extends Record<string, any> {
  range?: "weeks" | "months" | "lifetime" | string;
  before?: number;
  after?: number;
  limit?: number;
  offset?: number;
  ids?: string;
}

export interface RequestInitWithQuery extends RequestInit {
  query?: QueryParams;
}
