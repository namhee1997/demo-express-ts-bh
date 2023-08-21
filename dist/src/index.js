"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("../database");
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const PORT = 8080;
dotenv_1.default.config();
console.log(__dirname, '');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, database_1.configMongoose)();
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
