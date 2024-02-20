"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDefault = void 0;
function mergeDefault(def, given) {
    if (!given)
        return def;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in def) {
        if (!Object.hasOwnProperty.call(given, key) || given[key] === undefined) {
            given[key] = def[key];
        }
        else if (typeof given[key] === 'object') {
            given[key] = mergeDefault(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            def[key], given[key]);
        }
    }
    return given;
}
exports.mergeDefault = mergeDefault;
//# sourceMappingURL=mergeDefaults.js.map