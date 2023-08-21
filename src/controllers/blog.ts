import { Request, Response } from 'express';
import {
  ResponseOutputFailed,
  ResponseOutputSuccess,
} from '../domain/reponse-type';
import {
  createBlogRepository,
  deleteBlogRepository,
  getBlogsRepository,
  updateBlogRepository,
} from '../repository/blog';

export const getBlog = async (_req: Request, res: Response) => {
  try {
    const getBlog = await getBlogsRepository();
    const data = new ResponseOutputSuccess({ data: getBlog });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = await createBlogRepository(req.body);
    const data = new ResponseOutputSuccess({ data: blog });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const dataUpdate = await updateBlogRepository(req.params.blogID, req.body);
    const data = new ResponseOutputSuccess({ data: dataUpdate });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    await deleteBlogRepository(req.params.blogID);
    const data = new ResponseOutputSuccess({ data: 'Blog Deleted' });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};
