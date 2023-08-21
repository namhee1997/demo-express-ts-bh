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
const reponse_type_1 = require("../domain/reponse-type");
const security_1 = require("../utils/security");
const middlewareController = {
    verify: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers['authorization'] || '';
            const data = yield (0, security_1.verifyToken)(token);
            if (data)
                next();
        }
        catch (error) {
            const { message } = error;
            const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
            res.status(403).json(data);
        }
    }),
};
exports.default = middlewareController;
