import { InternalRequest, RawFile } from '../../interfaces';

export interface RequestBody {
  files?: RawFile[];
  json: string | undefined;
}

/**
 * Represents a HTTP error
 */
export class HTTPError extends Error {
  public requestBody: RequestBody;

  public override name = HTTPError.name;

  /**
   * @param status - The status code of the response
   * @param method - The method of the request that erred
   * @param url - The url of the request that erred
   * @param bodyData - The unparsed data for the request that errored
   */
  public constructor(
    public status: number,
    public method: string,
    public url: string,
    bodyData: Pick<InternalRequest, 'body' | 'files'>
  ) {
    super(status.toString());
    this.requestBody = { files: bodyData.files, json: bodyData.body?.toString() };
  }
}
