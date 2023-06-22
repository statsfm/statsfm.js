import { Readable } from 'node:stream';

/**
 * Represents a file to be added to the request
 */
export interface RawFile {
  key: string;
  /**
   * Content-Type of the file
   */
  contentType?: string;
  /**
   * The actual data for the file
   */
  data: Buffer | string;

  /**
   * The name of the file
   */
  name?: string;
}

export interface ResponseLike
  extends Pick<
    Response,
    'arrayBuffer' | 'bodyUsed' | 'headers' | 'json' | 'ok' | 'status' | 'text'
  > {
  body: Readable | ReadableStream | null;
}

export interface RequestData {
  /**
   * If this requests requires authentication.
   * @default false
   */
  auth?: boolean;

  /**
   * The body of the request.
   * If providing as BodyInit, set `passThroughBody: true` in the request options.
   */
  body?: BodyInit;

  /**
   * Files to be attached to this request
   */
  files?: RawFile[];

  /**
   * Additional headers to be sent with this request.
   */
  headers?: Record<string, string>;

  /**
   * Query string parameters to be appended to the endpoint URL.
   */
  query?: Record<string, string | number | boolean>;

  /**
   * If this request should be versioned.
   * @default true
   */
  versioned?: boolean;

  /**
   * Whether or not to pass through the body of the request.
   * @default false
   */
  passThroughBody?: boolean;
}

export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export type RouteLike = string;

export interface InternalRequest extends RequestData {
  fullRoute: RouteLike;
  method: RequestMethod;
}

export interface ItemResponse<Item> {
  item: Item;
}

export interface ItemsResponse<Item> {
  items: Item;
}
