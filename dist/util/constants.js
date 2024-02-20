"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOptions = exports.DefaultUserAgentAppendix = exports.DefaultUserAgent = void 0;
// eslint-disable-next-line import/no-commonjs
const { version } = require('../../package.json');
exports.DefaultUserAgent = `@statsfm/statsfm.js (${version})`;
exports.DefaultUserAgentAppendix = process.release?.name === 'node' ? `Node.js/${process.version}` : navigator.userAgent || '';
exports.DefaultOptions = {
    http: {
        retries: 3,
        apiUrl: 'https://api.stats.fm/api',
        userAgentAppendix: exports.DefaultUserAgentAppendix,
        version: '1'
    },
    auth: {}
};
//# sourceMappingURL=constants.js.map