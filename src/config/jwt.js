import jwt from 'jsonwebtoken';

export const generateToken = (user, secret, expiresIn) => {
  return jwt.sign({ id: user._id }, secret, { expiresIn });
};

export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

