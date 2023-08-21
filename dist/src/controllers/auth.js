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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.getToken = void 0;
const user_1 = require("../repository/user");
const reponse_type_1 = require("../domain/reponse-type");
const security_1 = require("../utils/security");
const utils_1 = require("../utils");
const getToken = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isValidGmail = (0, utils_1.isValidEmail)(_req.body.email);
        if (!isValidGmail)
            throw new Error('Invalid email!');
        const getUser = (yield (0, user_1.getUserByEmailRepository)(_req.body.email));
        if (!getUser)
            throw new Error('Incorrect username or password');
        const hashedPassword = yield (0, security_1.verifyPassword)(_req.body.hashed_password, getUser.hashed_password);
        if (!hashedPassword)
            throw new Error('Incorrect username or password');
        const payload = {
            email: getUser.email,
            date_of_birth: getUser.date_of_birth,
            phone: getUser.phone,
            fullname: getUser.fullname,
            avatar: getUser.avatar,
            address: getUser.address,
            role: getUser.role,
        };
        const getToken = yield (0, security_1.createToken)(payload);
        const data = new reponse_type_1.Token({ access_token: getToken });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.getToken = getToken;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isValidGmail = (0, utils_1.isValidEmail)(req.body.email);
        if (!isValidGmail)
            throw new Error('Invalid email!');
        const findEmail = yield (0, user_1.getUserByEmailRepository)(req.body.email);
        if (findEmail)
            throw new Error('Email already exist.');
        const hashed_password = yield (0, security_1.getPasswordHash)(req.body.hashed_password);
        const user = yield (0, user_1.createUserRepository)(Object.assign(Object.assign({}, req.body), { hashed_password }));
        const data = new reponse_type_1.ResponseOutputSuccess({ data: user });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.register = register;
