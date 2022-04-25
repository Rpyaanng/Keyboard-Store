import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenicatedError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  const emailToLower = email.toLowerCase();
  if (!email || !password) {
    throw new BadRequestError("Please provide all values!");
  }

  const userAlreadyExists = await User.findOne({ email: emailToLower });
  console.log(userAlreadyExists);
  if (userAlreadyExists) {
    throw new BadRequestError("An account with that email already exists.");
  }

  const user = await User.create({
    email: emailToLower,
    password,
    firstName,
    lastName,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      role: user.role,
    },
    token: token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);

  email.toLowerCase();
  var emailToLower = email.toLowerCase();
  console.log(emailToLower);
  if (!emailToLower || !password) {
    throw new BadRequestError("Please provide all values!");
  }
  const user = await User.findOne({ email: emailToLower }).select("+password");
  console.log(user);

  if (!user) {
    throw new UnAuthenicatedError("Invalid email or password.");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenicatedError("Invalid email or password.");
  }
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      role: user.role,
    },
    token: token,
  });
};

const updateUser = async (req, res) => {
  const { firstName, lastName, address } = req.body;
  if (!firstName || !lastName) {
    throw new BadRequestError("Please provide all values!");
  }
  console.log(req.user);
  const user = await User.findOne({ _id: req.user.userId });

  user.firstName = firstName;
  user.lastName = lastName;
  user.address = address ? address : "";

  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
    },
    token, //optional
  });
};

export { register, login, updateUser };
