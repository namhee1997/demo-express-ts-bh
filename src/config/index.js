"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const APP_CONFIG = {
    SALT_ROUNDS: 10,
    SECRET_KEY: process.env.SECRET_KEY || '',
    MONGODB_URL: process.env.MONGODB_URL || '',
    EXPIRES_IN_JWT: '30d',
    ALGORITHM: 'HS256',
    REGEX_EMAIL: /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|yahoo\.com|outlook\.com|example\.com)$/,
};
exports.default = APP_CONFIG;
