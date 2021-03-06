import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const doctorSchema = new mongoose.Schema({
  name: String,
  quailfications: String,
  bio: String,
  url: String,
  image: String,
  services: [{ type: mongoose.Schema.ObjectId, ref: "Service" }],
  appointments: [{ type: mongoose.Schema.ObjectId, ref: "Appointment" }],
});

doctorSchema.plugin(mongooseUniqueValidator);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
