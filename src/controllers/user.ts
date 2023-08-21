import { Request, Response } from 'express';
import { deleteUserRepository, updateUserRepository } from '../repository/user';
import {
  ResponseOutputFailed,
  ResponseOutputSuccess,
} from '../domain/reponse-type';

export const updateUser = async (req: Request, res: Response) => {
  try {
    const dataUpdate = await updateUserRepository(req.params.userID, req.body);
    const data = new ResponseOutputSuccess({ data: dataUpdate });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await deleteUserRepository(req.params.userID);
    const data = new ResponseOutputSuccess({ data: deleteUser });
    res.status(200).json(data);
  } catch (error) {
    const { message } = error as Error;
    const data = new ResponseOutputFailed({ data: [], message });
    res.status(404).json(data);
  }
};
