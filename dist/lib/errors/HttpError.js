"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
/**
 * Represents a HTTP error
 */
class HTTPError extends Error {
    /**
     * @param status - The status code of the response
     * @param method - The method of the request that erred
     * @param url - The url of the request that erred
     * @param bodyData - The unparsed data for the request that errored
     */
    constructor(status, method, url, bodyData) {
        super(status.toString());
        this.status = status;
        this.method = method;
        this.url = url;
        this.name = HTTPError.name;
        this.requestBody = { files: bodyData.files, json: bodyData.body?.toString() };
    }
}
exports.HTTPError = HTTPError;
//# sourceMappingURL=HttpError.js.map