"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_repo_1 = __importDefault(require("@repos/Account.repo"));
function getAll() {
    return Account_repo_1.default.getAccounts();
}
function getBalance(address) {
    return Account_repo_1.default.getBalance(address);
}
exports.default = {
    getAll,
    getBalance,
};
