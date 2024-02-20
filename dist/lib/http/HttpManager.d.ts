import 'isomorphic-unfetch';
import { Options } from '../../interfaces/Options';
import { ResponseLike, InternalRequest, RouteLike, RequestData } from '../../interfaces/Request';
export declare class HttpManager {
    options: Required<Options>;
    accessToken?: string;
    constructor(options: Required<Options>);
    setToken(token?: string): void;
    /**
     * @param {InternalRequest} request
     * @returns {Promise<ResponseLike>} Returns a promise with the {@link ResponseLike response}.
     */
    private queueRequest;
    resolveUrl(route: RouteLike, versioned?: boolean, query?: string): string;
    private getFiles;
    private resolveRequest;
    private runRequest;
    private makeRequest;
    private handleErrors;
    /**
     * Runs a GET request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    get<T>(fullRoute: RouteLike, options?: RequestData): Promise<T>;
    /**
     * Runs a DELETE request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    delete<T>(fullRoute: RouteLike, options?: RequestData): Promise<T>;
    /**
     * Runs a POST request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    post<T>(fullRoute: RouteLike, options?: RequestData): Promise<T>;
    /**
     * Runs a PUT request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    put<T>(fullRoute: RouteLike, options?: RequestData): Promise<T>;
    /**
     * Runs a PATCH request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    patch<T>(fullRoute: RouteLike, options?: RequestData): Promise<T>;
    /**
     * Runs a request from the api
     *
     * @param {InternalRequest} options - Request options
     */
    request<T>(options: InternalRequest): Promise<T>;
    parseResponse<T>(res: ResponseLike): Promise<T>;
    /**
     * Runs a request from the API, yielding the raw Response object
     *
     * @param {InternalRequest} options - Request options
     */
    raw(options: InternalRequest): Promise<ResponseLike>;
}
