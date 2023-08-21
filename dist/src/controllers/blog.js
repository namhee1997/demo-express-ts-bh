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
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlog = void 0;
const reponse_type_1 = require("../domain/reponse-type");
const blog_1 = require("../repository/blog");
const getBlog = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBlog = yield (0, blog_1.getBlogsRepository)();
        const data = new reponse_type_1.ResponseOutputSuccess({ data: getBlog });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.getBlog = getBlog;
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield (0, blog_1.createBlogRepository)(req.body);
        const data = new reponse_type_1.ResponseOutputSuccess({ data: blog });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.createBlog = createBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataUpdate = yield (0, blog_1.updateBlogRepository)(req.params.blogID, req.body);
        const data = new reponse_type_1.ResponseOutputSuccess({ data: dataUpdate });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, blog_1.deleteBlogRepository)(req.params.blogID);
        const data = new reponse_type_1.ResponseOutputSuccess({ data: 'Blog Deleted' });
        res.status(200).json(data);
    }
    catch (error) {
        const { message } = error;
        const data = new reponse_type_1.ResponseOutputFailed({ data: [], message });
        res.status(404).json(data);
    }
});
exports.deleteBlog = deleteBlog;
