"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sleep function.
 * @param {number} delay Delay in milliseconds.
 */
function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
exports.default = sleep;
//# sourceMappingURL=sleep.js.map