import jwt, { sign, verify } from 'jsonwebtoken';
import loggers from './logger.js';

//ACCESS TOKEN
const JWT_ACCESS_TOKEN =
  process.env.JWT_ACCESS_TOKEN || 'Your-Secret-Key-please-Change-in-env-file';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

//REFERESH TOKEN
const JWT_REFERESH_SECRET =
  process.env.JWT_REFERESH_SECRET ||
  'Your-Secret-Key-please-Change-in-env-file';
const JWT_REFERESH_EXPIRES_IN = process.env.JWT_REFERESH_EXPIRES_IN || '7d';

export const accesToken = {
  sign: payload => {
    try {
      return jwt.sign(payload, JWT_ACCESS_TOKEN, { expiresIn: JWT_EXPIRES_IN });
    } catch (e) {
      loggers.error('Failed to authenticate token', e);
      throw new Error('Failed to authenticate token');
    }
  },

  verify: token => {
    try {
      return jwt.verify(token, JWT_ACCESS_TOKEN);
    } catch (e) {
      loggers.error('Failed to authenticate token', e);
      throw new Error('Failed to authenticate token');
    }
  },
};

export const refereshToken = {
  sign: payload => {
    try {
      return jwt.sign(payload, JWT_REFERESH_SECRET, {
        expiresIn: JWT_REFERESH_EXPIRES_IN,
      });
    } catch (e) {
      loggers.error('Failed to authenticate token', e);
      throw new Error('Failed to authenticate token');
    }
  },

  verify: token => {
    try {
      return jwt.verify(token, JWT_REFERESH_SECRET);
    } catch (e) {
      loggers.error('Failed to authenticate token', e);
      throw new Error('Failed to authenticate token');
    }
  },
};
