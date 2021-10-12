import jwt from "jsonwebtoken";
import User from "../models/user.js";

async function getAllUsers(req, res, next) {
  try {
    if (!req.isUserAdmin) {
      return res.status(401).send({ message: "Only admins can create admins" });
    }

    const users = await User.find();
    res.status(201).send(users);
  } catch (err) {
    next(err);
  }
}

async function registerUser(req, res, next) {
  const body = req.body;
  try {
    const user = await User.create({ ...body, isAdmin: false });
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
}

async function loginUser(req, res, next) {
  const password = req.body.password;
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user.validatePassword(password)) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET, //
      { expiresIn: "1h" }
    );

    res.status(202).send({ token, message: "Login successful!" });
  } catch (err) {
    next(err);
  }
}

async function demoteUser(req, res, next) {
  const body = req.body;
  try {
    if (!req.isUserAdmin) {
      return res.status(401).send({ message: "Only admins can create admins" });
    }

    const user = await User.findOne({ _id: body.userId });
    user.set({ isAdmin: false });
    user.save();
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
}

async function promoteUser(req, res, next) {
  const body = req.body;
  try {
    if (!req.isUserAdmin) {
      return res.status(401).send({ message: "Only admins can create admins" });
    }

    const user = await User.findOne({ _id: body.userId });
    user.set({ isAdmin: true });
    user.save();
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllUsers,
  registerUser,
  loginUser,
  promoteUser,
  demoteUser,
};
