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
exports.deleteBlogRepository = exports.updateBlogRepository = exports.createBlogRepository = exports.getBlogsRepository = void 0;
const blog_1 = __importDefault(require("../model/blog"));
const user_1 = require("./user");
const getBlogsRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBlogs = yield blog_1.default.find();
        return getBlogs;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.getBlogsRepository = getBlogsRepository;
const createBlogRepository = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAuthor = (yield (0, user_1.getUserByIdRepository)(data.authorId));
        const user = new blog_1.default({
            title: data.title,
            content: data.content,
            author: (getAuthor === null || getAuthor === void 0 ? void 0 : getAuthor._id) || '',
            tags: data.tags,
        });
        const savedUser = yield user.save();
        return savedUser;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.createBlogRepository = createBlogRepository;
const updateBlogRepository = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAuthor = (yield (0, user_1.getUserByIdRepository)(data.authorId));
        const dataUpdate = yield blog_1.default.findOneAndUpdate({ _id: id }, {
            $set: {
                title: data.title,
                content: data.title,
                author: (getAuthor === null || getAuthor === void 0 ? void 0 : getAuthor._id) || '',
                tags: data.tags,
            },
        }, { new: true });
        return dataUpdate;
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.updateBlogRepository = updateBlogRepository;
const deleteBlogRepository = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield blog_1.default.deleteOne({ _id: id });
        return 'Blog Deleted';
    }
    catch (error) {
        const { message } = error;
        throw new Error(message);
    }
});
exports.deleteBlogRepository = deleteBlogRepository;
