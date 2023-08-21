"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../src/config"));
const configMongoose = () => {
    mongoose_1.default
        .connect(config_1.default.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        console.log("Connected to MongoDB");
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.configMongoose = configMongoose;
module.exports = {
    configMongoose: exports.configMongoose,
};
