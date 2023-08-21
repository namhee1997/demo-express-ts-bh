import User from '../model/user';
import { UserType } from '../domain/schema';

export const getUserByEmailRepository = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const getUserByIdRepository = async (id: string) => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const getUsersRepository = async () => {
  try {
    const getUsers = await User.find().select('-hashed_password');
    return getUsers;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const createUserRepository = async (data: UserType) => {
  try {
    const user = new User({
      hashed_password: data.hashed_password,
      email: data.email,
      date_of_birth: data.date_of_birth,
      phone: data.phone,
      fullname: data.fullname,
      avatar: data.avatar,
      address: data.address,
      role: data.role || 'user',
    });

    const savedUser = await user.save();

    return savedUser;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const updateUserRepository = async (id: string, data: UserType) => {
  try {
    const res = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          email: data.email,
          date_of_birth: data.date_of_birth,
          phone: data.phone,
          fullname: data.fullname,
          avatar: data.avatar,
          address: data.address,
        },
      },
      { new: true, projection: { hashed_password: 0 } },
    );
    return res;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export const deleteUserRepository = async (id: string) => {
  try {
    await User.deleteOne({ _id: id });
    return 'User Deleted';
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};
