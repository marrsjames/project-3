import jwt from "jsonwebtoken";
import PatientLogin from "../models/patientLogin.js";

async function registerPatient(req, res, next) {
  const body = req.body;
  try {
    const patientLogin = await PatientLogin.create({ ...body, isAdmin: false });
    res.status(201).send(patientLogin);
  } catch (err) {
    next(err);
  }
}

async function loginPatient(req, res, next) {
  const password = req.body.password;
  try {
    const patientLogin = await PatientLogin.findOne({
      username: req.body.username,
    });

    if (!patientLogin.validatePassword(password)) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const token = jwt.sign({ userId: patientLogin._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    res.status(202).send({ token, message: "Login successful!" });
  } catch (err) {
    next(err);
  }
}

export default {
  registerPatient,
  loginPatient,
};
