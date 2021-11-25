import mongoose from "mongoose";
import bcrypt from "bcrypt";
import mongooseHidden from "mongoose-hidden";
import uniqueValidator from "mongoose-unique-validator";

const patientLogin = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  isAdmin: { type: Boolean, isAdmin: false },
});

patientLogin.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  next();
});

patientLogin.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

patientLogin.plugin(uniqueValidator);

patientLogin.plugin(
  mongooseHidden({
    defaultHidden: { password: true, email: true },
  })
);

const PatientLogin = mongoose.model("PatientLogin", patientLogin);
export default PatientLogin;
