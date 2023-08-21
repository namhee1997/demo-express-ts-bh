"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controllers/auth");
const user_1 = require("../controllers/user");
const user_2 = __importDefault(require("../middleware/user"));
const blog_1 = require("../controllers/blog");
const router = require('express').Router();
router.get('/', (_req, res) => {
    res.send("Let's build a CRUD API!");
});
//auth
router.get('/auth/token', auth_1.getToken);
router.post('/auth/register', auth_1.register);
//users
router.put('/users/:userID', user_2.default.verify, user_1.updateUser);
router.delete('/users/:userID', user_2.default.verify, user_1.deleteUser);
// blog
router.get('/blogs', blog_1.getBlog);
router.post('/blogs', blog_1.createBlog);
router.put('/blogs/:blogID', blog_1.updateBlog);
router.delete('/blogs/:blogID', blog_1.deleteBlog);
exports.default = router;
