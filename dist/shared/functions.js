"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.pErr = void 0;
const jet_logger_1 = __importDefault(require("jet-logger"));
function pErr(err) {
    if (!!err) {
        jet_logger_1.default.err(err);
    }
}
exports.pErr = pErr;
;
function getRandomInt() {
    return Math.floor(Math.random() * 1000000000000);
}
exports.getRandomInt = getRandomInt;
;
