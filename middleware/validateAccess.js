import { verifyToken } from "../utils/tokens.js";


const validateAccess = (req, res, next) => {
  try {
    const { tokenMiercoles } = req.cookies;
    if (!tokenMiercoles) throw new Error("Acceso denegado");
    const { payload } = verifyToken(tokenMiercoles);
    if (!payload) throw new Error("Acceso denegado");
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export default validateAccess
