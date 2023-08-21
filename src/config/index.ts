import dotenv from 'dotenv';
dotenv.config();

const APP_CONFIG = {
  SALT_ROUNDS: 10,
  SECRET_KEY: process.env.SECRET_KEY || '',
  MONGODB_URL: process.env.MONGODB_URL || '',
  EXPIRES_IN_JWT: '30d', // 30 day,
  ALGORITHM: 'HS256',
  REGEX_EMAIL: /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|yahoo\.com|outlook\.com|example\.com)$/,
}

export default APP_CONFIG;