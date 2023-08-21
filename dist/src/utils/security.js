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
exports.verifyToken = exports.createToken = exports.verifyPassword = exports.getPasswordHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
function getPasswordHash(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt_1.default.hash(password, config_1.default.SALT_ROUNDS);
        return hashedPassword;
    });
}
exports.getPasswordHash = getPasswordHash;
function verifyPassword(plainPassword, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcrypt_1.default.compare(plainPassword, hashedPassword);
        return isMatch;
    });
}
exports.verifyPassword = verifyPassword;
const createToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield jsonwebtoken_1.default.sign(payload, config_1.default.SECRET_KEY, {
        expiresIn: config_1.default.EXPIRES_IN_JWT,
    });
    return token;
});
exports.createToken = createToken;
const verifyToken = (token) => {
    try {
        if (token.startsWith('Bearer '))
            token = token.split('Bearer ')[1];
        const payload = jsonwebtoken_1.default.verify(token, config_1.default.SECRET_KEY, {
            algorithms: [config_1.default.ALGORITHM],
        });
        if (!payload)
            throw new Error('Invalid token.');
        const currentTimestamp = Math.floor(Date.now());
        if (payload.exp * 1000 < currentTimestamp)
            throw new Error('Token is valid and not expired.');
        return payload;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
};
exports.verifyToken = verifyToken;
