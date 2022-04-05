"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNew(name, email) {
    return {
        id: -1,
        email,
        name,
    };
}
function copy(user) {
    return {
        id: user.id,
        email: user.email,
        name: user.name,
    };
}
exports.default = {
    new: getNew,
    copy,
};
