"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsFMAPIError = void 0;
class StatsFMAPIError extends Error {
    constructor(rawError, status, method, url, bodyData) {
        super(typeof rawError === 'string' ? rawError : rawError.message);
        this.rawError = rawError;
        this.status = status;
        this.method = method;
        this.url = url;
        this.requestBody = { files: bodyData.files, json: bodyData.body?.toString() };
    }
    get name() {
        return `${StatsFMAPIError.name}[${this.status}]`;
    }
}
exports.StatsFMAPIError = StatsFMAPIError;
//# sourceMappingURL=StatsFMAPIError.js.map