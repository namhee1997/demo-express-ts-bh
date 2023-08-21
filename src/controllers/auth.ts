import { Request, Response } from 'express';
import {
  createUserRepository,
  getUserByEmailRepository,
} from '../repository/user';
import {
  ResponseOutputFailed,
  ResponseOutputSuccess,
  Token,
} from '../domain/reponse-type';
import {
  createToken,
  getPasswordHash,
  verifyPassword,
} from '../utils/security';
import { DataUserType } from '../domain/schema';
import { isValidEmail } from '../utils';

export const getToken = async (_req: Request, res: Response) => {
  try {
    const isValidGmail = isValidEmail(_req.body.email);
    if (!isValidGmail) throw new Error('Invalid email!');

    const getUser = (await getUserByEmailRepository(
      _req.body.email,
    )) as DataUserType | null;

    if (!getUser) throw new Error('Incorrect username or password');

    const hashedPassword = await verifyPassword(
      _req.body.hashed_password,
      getUser.hashed_password,
    );
    if (!hashedPassword) throw new Error('Incorrect username or password');

    const payload = {
      email: getUser.email,
      date_of_birth: getUser.date_of_birth,
      phone: getUser.phone,
      fullname: getUser.fullname,
      avatar: getUser.avatar,
      address: getUser.address,
      role: getUser.role,
    };

    const getToken = await createToken(payload);

    const data = new Token({ access_token: getToken });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const isValidGmail = isValidEmail(req.body.email);
    if (!isValidGmail) throw new Error('Invalid email!');

    const findEmail = await getUserByEmailRepository(req.body.email);
    if (findEmail) throw new Error('Email already exist.');

    const hashed_password = await getPasswordHash(req.body.hashed_password);
    const user = await createUserRepository({
      ...req.body,
      hashed_password,
    });

    const data = new ResponseOutputSuccess({ data: user });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};
