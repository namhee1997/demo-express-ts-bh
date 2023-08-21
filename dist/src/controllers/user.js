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
exports.deleteUser = exports.updateUser = void 0;
const user_1 = require("../repository/user");
const reponse_type_1 = require("../domain/reponse-type");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataUpdate = yield (0, user_1.updateUserRepository)(req.params.userID, req.body);
        const data = new reponse_type_1.ResponseOutputSuccess({ data: dataUpdate });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUser = yield (0, user_1.deleteUserRepository)(req.params.userID);
        const data = new reponse_type_1.ResponseOutputSuccess({ data: deleteUser });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.deleteUser = deleteUser;
