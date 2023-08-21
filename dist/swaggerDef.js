"use strict";
/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: The blog managing API
 * /blogs:
 *   get:
 *     summary: Lists all the books
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: The list of the blog
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './src/model/blog'
 *
 */ 
