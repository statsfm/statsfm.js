import { InternalRequest, RawFile } from '../../interfaces';
export interface RequestBody {
    files?: RawFile[];
    json: string | undefined;
}
/**
 * Represents a HTTP error
 */
export declare class HTTPError extends Error {
    status: number;
    method: string;
    url: string;
    requestBody: RequestBody;
    name: string;
    /**
     * @param status - The status code of the response
     * @param method - The method of the request that erred
     * @param url - The url of the request that erred
     * @param bodyData - The unparsed data for the request that errored
     */
    constructor(status: number, method: string, url: string, bodyData: Pick<InternalRequest, 'body' | 'files'>);
}
