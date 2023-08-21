import bcrypt from 'bcrypt';
import jwt, { Algorithm } from 'jsonwebtoken';
import APP_CONFIG from '../config';
import { DataUserType } from '../domain/schema';

export async function getPasswordHash(password: string) {
  const hashedPassword = await bcrypt.hash(password, APP_CONFIG.SALT_ROUNDS);
  return hashedPassword;
}

export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string,
) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

export const createToken = async (
  payload: Omit<DataUserType, 'hashed_password'>,
) => {
  const token = await jwt.sign(payload, APP_CONFIG.SECRET_KEY, {
    expiresIn: APP_CONFIG.EXPIRES_IN_JWT,
  });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    if (token.startsWith('Bearer ')) token = token.split('Bearer ')[1];

    const payload = jwt.verify(token, APP_CONFIG.SECRET_KEY, {
      algorithms: [APP_CONFIG.ALGORITHM as Algorithm],
    }) as DataUserType & { exp: number };

    if (!payload) throw new Error('Invalid token.');

    const currentTimestamp = Math.floor(Date.now());
    if (payload.exp * 1000 < currentTimestamp)
      throw new Error('Token is valid and not expired.');

    return payload;
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};
