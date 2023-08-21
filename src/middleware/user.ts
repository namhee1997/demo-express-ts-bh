import { ResponseOutputFailed } from '../domain/reponse-type';
import { verifyToken } from '../utils/security';
import { NextFunction, Request, Response } from 'express';

const middlewareController = {
  verify: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['authorization'] || '';

      const data = await verifyToken(token as string);
      
      if (data) next();
    } catch (error) {
      const { message } = error as Error;
      const data = new ResponseOutputFailed({ data: [], message });
      res.status(403).json(data);
    }
  },
};

export default middlewareController;
