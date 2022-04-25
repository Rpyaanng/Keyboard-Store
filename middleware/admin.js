import jwt from "jsonwebtoken";
import { UnAuthorisedError, UnAuthenicatedError } from "../errors/index.js";

const AuthenticateAdmin = async (req, res, next) => {
  console.log(req.user);
  if (req.user.role !== "admin") {
    throw new UnAuthorisedError("User is not an admin");
  }
  next();
};

export default AuthenticateAdmin;
