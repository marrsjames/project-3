import mongoose from "mongoose";
import bcrypt from "bcrypt";
import mongooseHidden from "mongoose-hidden";
import uniqueValidator from "mongoose-unique-validator";

// the user will be an admin user

const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, isAdmin: true },
});

user.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  next();
});

user.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

user.plugin(uniqueValidator);

user.plugin(
  mongooseHidden({
    defaultHidden: { password: true, email: true },
  })
);

const User = mongoose.model("User", user);
export default User;
