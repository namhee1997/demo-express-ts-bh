"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.ResponseOutputFailed = exports.ResponseOutputSuccess = void 0;
class ResponseOutputSuccess {
    constructor({ data, status = 200 }) {
        this.data = data;
        this.status = status;
    }
}
exports.ResponseOutputSuccess = ResponseOutputSuccess;
class ResponseOutputFailed {
    constructor({ data, status = 404, message }) {
        this.data = data;
        this.status = status;
        this.message = message;
    }
}
exports.ResponseOutputFailed = ResponseOutputFailed;
class Token {
    constructor({ access_token, token_type = 'bearer', verify_token }) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.verify_token = verify_token;
    }
}
exports.Token = Token;
