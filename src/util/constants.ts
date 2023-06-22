import { Options } from '../interfaces';

const { version } = require('../../package.json');

export const DefaultUserAgent = `@statsfm/statsfm.js (${version})`;

export const DefaultUserAgentAppendix =
  process.release?.name === 'node' ? `Node.js/${process.version}` : '';

export const DefaultOptions = {
  http: {
    retries: 3,
    apiUrl: 'https://api.stats.fm/api',
    userAgentAppendix: DefaultUserAgentAppendix,
    version: '1'
  },
  auth: {}
} as const satisfies Options;
