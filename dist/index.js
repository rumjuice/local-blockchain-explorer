"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jet_logger_1 = __importDefault(require("jet-logger"));
require("./pre-start");
const server_1 = __importDefault(require("./server"));
const message = "Express server started on port: ", port = process.env.PORT || 3000;
server_1.default.listen(port, () => {
    jet_logger_1.default.info(message + port);
});
