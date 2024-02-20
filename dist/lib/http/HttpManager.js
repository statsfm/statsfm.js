"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpManager = void 0;
require("isomorphic-unfetch");
const browser_1 = require("file-type/browser");
const constants_1 = require("../../util/constants");
const Request_1 = require("../../interfaces/Request");
const HttpError_1 = require("../errors/HttpError");
const StatsFMAPIError_1 = require("../errors/StatsFMAPIError");
class HttpManager {
    constructor(options) {
        this.options = options;
        this.accessToken = options.auth.accessToken;
    }
    setToken(token) {
        this.accessToken = token;
    }
    /**
     * @param {InternalRequest} request
     * @returns {Promise<ResponseLike>} Returns a promise with the {@link ResponseLike response}.
     */
    async queueRequest(request) {
        const { url, fetchOptions } = await this.resolveRequest(request);
        return await this.runRequest(url, fetchOptions, request);
    }
    resolveUrl(route, versioned, query) {
        return `${this.options.http.apiUrl}${versioned === false ? '' : `/v${this.options.http.version}`}${route}${query ? `?${query}` : ''}`;
    }
    async getFiles(files) {
        const formData = new FormData();
        // Attach all files to the request
        for (let index = 0; index < files.length; index++) {
            const file = files[index];
            if (Buffer.isBuffer(file.data)) {
                let finalContentType = file.contentType;
                if (!finalContentType) {
                    // eslint-disable-next-line no-await-in-loop
                    const parsedFileType = (await (0, browser_1.fromBuffer)(file.data))?.mime;
                    if (parsedFileType) {
                        finalContentType = parsedFileType;
                    }
                    formData.append(file.key, new Blob([`${file.data}`], { type: file.contentType }), file.name);
                }
            }
            else {
                formData.append(file.key, new Blob([`${file.data}`], { type: file.contentType }), file.name);
            }
        }
        return formData;
    }
    async resolveRequest(request) {
        let query = '';
        if (request.query) {
            const resolvedQuery = new URLSearchParams(Object.fromEntries(Object.entries(request.query).map(([key, value]) => [key, value.toString()]))).toString();
            if (resolvedQuery !== '') {
                query = resolvedQuery;
            }
        }
        const headers = {
            'User-Agent': `${constants_1.DefaultUserAgent} ${this.options.http.userAgentAppendix}`.trim()
        };
        if (request.authRequired === true && !this.accessToken) {
            throw new Error('Expected access token to be set for this request, but none was found.');
        }
        if (this.accessToken) {
            headers.Authorization = `Bearer ${this.accessToken}`;
        }
        const url = this.resolveUrl(request.fullRoute, request.versioned, query);
        let finalBody;
        let additionalHeaders = {};
        if (request.files?.length) {
            finalBody = await this.getFiles(request.files);
        }
        else if (request.body != null) {
            if (request.passThroughBody) {
                finalBody = request.body;
            }
            else {
                finalBody = request.body;
                additionalHeaders = {
                    'Content-Type': 'application/json'
                };
            }
        }
        const method = request.method.toUpperCase();
        return {
            url,
            fetchOptions: {
                body: ['GET', 'HEAD'].includes(method) ? undefined : finalBody,
                headers: { ...request.headers, ...headers, ...additionalHeaders },
                method
            }
        };
    }
    async runRequest(url, options, requestData, retries = 0) {
        const method = options.method || Request_1.RequestMethod.Get;
        const res = await this.makeRequest(url, options, retries);
        if (res === null) {
            return await this.runRequest(url, options, requestData, ++retries);
        }
        const { status } = res;
        if (status >= 200 && status < 300) {
            return res;
        }
        const handledError = await this.handleErrors(res, method, url, requestData, retries);
        if (handledError === null) {
            return await this.runRequest(url, options, requestData, ++retries);
        }
        return handledError;
    }
    async makeRequest(url, options, retries) {
        let res;
        try {
            res = await fetch(url, options);
        }
        catch (error) {
            if (!(error instanceof Error))
                throw error;
            if ((('code' in error && error.code === 'ECONNRESET') ||
                error.message.includes('ECONNRESET')) &&
                retries !== this.options.http.retries) {
                return null;
            }
            throw error;
        }
        return {
            body: res.body,
            arrayBuffer() {
                return res.arrayBuffer();
            },
            json() {
                return res.json();
            },
            text() {
                return res.text();
            },
            bodyUsed: res.bodyUsed,
            headers: res.headers,
            status: res.status,
            ok: res.ok
        };
    }
    async handleErrors(res, method, url, requestData, retries) {
        const { status } = res;
        if (status >= 500 && status < 600) {
            if (retries < this.options.http.retries) {
                return null;
            }
            throw new HttpError_1.HTTPError(status, method, url, requestData);
        }
        else {
            if (status >= 400 && status < 500) {
                if (status === 401 && requestData.authRequired) {
                    this.setToken(null);
                }
                throw new StatsFMAPIError_1.StatsFMAPIError((await this.parseResponse(res)), status, method, url, requestData);
            }
            return res;
        }
    }
    /**
     * Runs a GET request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    get(fullRoute, options = {}) {
        return this.request({ ...options, fullRoute, method: Request_1.RequestMethod.Get });
    }
    /**
     * Runs a DELETE request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    delete(fullRoute, options = {}) {
        return this.request({ ...options, fullRoute, method: Request_1.RequestMethod.Delete });
    }
    /**
     * Runs a POST request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    post(fullRoute, options = {}) {
        return this.request({ ...options, fullRoute, method: Request_1.RequestMethod.Post });
    }
    /**
     * Runs a PUT request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    put(fullRoute, options = {}) {
        return this.request({ ...options, fullRoute, method: Request_1.RequestMethod.Put });
    }
    /**
     * Runs a PATCH request from the api
     *
     * @param {string} fullRoute - The full route to query
     * @param {RequestData?} options - Optional request options
     */
    patch(fullRoute, options = {}) {
        return this.request({ ...options, fullRoute, method: Request_1.RequestMethod.Patch });
    }
    /**
     * Runs a request from the api
     *
     * @param {InternalRequest} options - Request options
     */
    async request(options) {
        const res = await this.raw(options);
        return await this.parseResponse(res);
    }
    async parseResponse(res) {
        const contentType = res.headers.get('content-type');
        if (contentType?.startsWith('application/json')) {
            return await res.json();
        }
        if (contentType?.startsWith('text/html')) {
            return res.text();
        }
        if (contentType?.startsWith('image')) {
            return (await res.arrayBuffer());
        }
        return (await res.text());
    }
    /**
     * Runs a request from the API, yielding the raw Response object
     *
     * @param {InternalRequest} options - Request options
     */
    raw(options) {
        return this.queueRequest(options);
    }
}
exports.HttpManager = HttpManager;
//# sourceMappingURL=HttpManager.js.map