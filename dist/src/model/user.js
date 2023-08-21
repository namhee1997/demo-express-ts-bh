"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    hashed_password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    date_of_birth: {
        type: String,
        default: false,
    },
    phone: {
        type: String,
        index: true,
    },
    fullname: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
    },
    address: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("User", UserSchema);
