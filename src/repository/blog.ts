import Blog from '../model/blog';
import { DataBlogType, DataUserType } from '../domain/schema';
import { getUserByIdRepository } from './user';

export const getBlogsRepository = async () => {
  try {
    const getBlogs = await Blog.find();
    return getBlogs;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const createBlogRepository = async (data: DataBlogType) => {
  try {
    const getAuthor = (await getUserByIdRepository(
      data.authorId,
    )) as DataUserType | null;

    const user = new Blog({
      title: data.title,
      content: data.content,
      author: getAuthor?._id || '',
      tags: data.tags,
    });

    const savedUser = await user.save();

    return savedUser;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const updateBlogRepository = async (id: string, data: DataBlogType) => {
  try {
    const getAuthor = (await getUserByIdRepository(
      data.authorId,
    )) as DataUserType | null;

    const dataUpdate = await Blog.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: data.title,
          content: data.title,
          author: getAuthor?._id || '',
          tags: data.tags,
        },
      },
      { new: true },
    );
    return dataUpdate;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const deleteBlogRepository = async (id: string) => {
  try {
    await Blog.deleteOne({ _id: id });
    return 'Blog Deleted';
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};
