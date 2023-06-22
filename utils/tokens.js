import jwt from "jsonwebtoken";
import { secret } from "../config/config.js";

export const generateToken = (payload) => {
  const token = jwt.sign({ payload }, secret, {
    expiresIn: "2d",
  });
  return token;
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};
