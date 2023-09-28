import { OrderBySetting } from './user';

export enum Range {
  TODAY = 'today',
  DAYS = 'days',
  WEEKS = 'weeks',
  MONTHS = 'months',
  LIFETIME = 'lifetime'
}

export type OrderBy = 'desc' | 'asc';

export interface QueryWithPaging {
  limit?: number;
  offset?: number;
  order?: OrderBy;
}

export interface QueryWithRange {
  range?: Range;
}

export interface QueryWithTimeZone {
  timeZoneOffset?: number;
  timeZone?: string;
}

export interface QueryWithOrder {
  orderBy?: OrderBySetting;
}

export interface QueryWithDates {
  before?: number;
  after?: number;
}

export type QueryStatsDates = (QueryWithDates | QueryWithRange) & QueryWithTimeZone;
