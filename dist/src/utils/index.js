"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = void 0;
const config_1 = __importDefault(require("../config"));
const isValidEmail = (email) => {
    return config_1.default.REGEX_EMAIL.test(email);
};
exports.isValidEmail = isValidEmail;
