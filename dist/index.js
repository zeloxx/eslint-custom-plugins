"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const no_invalid_inline_style_1 = __importDefault(require("./rules/no-invalid-inline-style"));
module.exports = {
    rules: {
        "no-invalid-inline-style": no_invalid_inline_style_1.default,
    },
};
