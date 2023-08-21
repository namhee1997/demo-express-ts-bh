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
exports.deleteUserRepository = exports.updateUserRepository = exports.createUserRepository = exports.getUsersRepository = exports.getUserByIdRepository = exports.getUserByEmailRepository = void 0;
const user_1 = __importDefault(require("../model/user"));
const getUserByEmailRepository = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ email });
        return user;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.getUserByEmailRepository = getUserByEmailRepository;
const getUserByIdRepository = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ _id: id });
        return user;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.getUserByIdRepository = getUserByIdRepository;
const getUsersRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUsers = yield user_1.default.find().select('-hashed_password');
        return getUsers;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.getUsersRepository = getUsersRepository;
const createUserRepository = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default({
            hashed_password: data.hashed_password,
            email: data.email,
            date_of_birth: data.date_of_birth,
            phone: data.phone,
            fullname: data.fullname,
            avatar: data.avatar,
            address: data.address,
            role: data.role || 'user',
        });
        const savedUser = yield user.save();
        return savedUser;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.createUserRepository = createUserRepository;
const updateUserRepository = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield user_1.default.findOneAndUpdate({ _id: id }, {
            $set: {
                email: data.email,
                date_of_birth: data.date_of_birth,
                phone: data.phone,
                fullname: data.fullname,
                avatar: data.avatar,
                address: data.address,
            },
        }, { new: true, projection: { hashed_password: 0 } });
        return res;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.updateUserRepository = updateUserRepository;
const deleteUserRepository = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.default.deleteOne({ _id: id });
        return 'User Deleted';
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.deleteUserRepository = deleteUserRepository;
