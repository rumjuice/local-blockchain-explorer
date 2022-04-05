"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Account_router_1 = __importDefault(require("./Account.router"));
const baseRouter = (0, express_1.Router)();
baseRouter.use("/account", Account_router_1.default);
exports.default = baseRouter;
