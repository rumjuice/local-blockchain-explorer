"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = void 0;
const Account_service_1 = __importDefault(require("@services/Account.service"));
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const router = (0, express_1.Router)();
const { CREATED, OK } = http_status_codes_1.default;
exports.p = {
    address: "/address",
    balance: "/balance",
    update: "/update",
    delete: "/delete/:id",
};
router.get(exports.p.address, (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const acc = yield Account_service_1.default.getAll();
    return res.status(OK).json(acc);
}));
router.get(exports.p.balance, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const address = req.query.address;
    const acc = yield Account_service_1.default.getBalance(address);
    return res.status(OK).json(acc);
}));
exports.default = router;
