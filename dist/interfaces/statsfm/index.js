"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2 = exports.v1 = void 0;
__exportStar(require("./audio-analysis"), exports);
__exportStar(require("./audio-features"), exports);
__exportStar(require("./database_size"), exports);
__exportStar(require("./friend_status"), exports);
__exportStar(require("./giftCode"), exports);
__exportStar(require("./query"), exports);
__exportStar(require("./record"), exports);
__exportStar(require("./search"), exports);
__exportStar(require("./soulmate"), exports);
__exportStar(require("./stats"), exports);
__exportStar(require("./stream"), exports);
__exportStar(require("./top"), exports);
__exportStar(require("./user"), exports);
exports.v1 = __importStar(require("./v1"));
exports.v2 = __importStar(require("./v2"));
//# sourceMappingURL=index.js.map