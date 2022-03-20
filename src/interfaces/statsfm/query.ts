import { OrderBySetting } from './user';

export enum Range {
  TODAY = 'today',
  DAYS = 'days',
  WEEKS = 'weeks',
  MONTHS = 'months',
  LIFETIME = 'lifetime'
}

export interface QueryWithPaging {
  limit?: number;
  offset?: number;
}

export interface QueryWithRange {
  range?: Range;
}

export interface QueryWithTimeZoneOfsset {
  timeZoneOffset?: number;
}

export interface QueryWithOrder {
  orderBy?: OrderBySetting;
}

export interface QueryWithDates {
  before?: number;
  after?: number;
}
