import Doctor from "../models/doctor.js";
import Service from "../models/service.js";
import { doctorsSeedData } from "./doctorsSeedData.js";
import { appointmentsSeedData } from "./appointmentsSeedData.js";
import { patientSeedData } from "./patientSeedData.js";
import { serviceSeedData } from "./serviceSeedData.js";
import { userSeedData } from "./userSeedData.js";
import { connectDb, dropDb, disconnectDb } from "./helpers.js";
import Patient from "../models/patient.js";
import dotenv from "dotenv";
import Appointment from "../models/appointment.js";
import User from "../models/user.js";

dotenv.config();

async function seed() {
  try {
    await connectDb();
    console.log("connect to database");

    await dropDb();
    console.log("database dropped");

    const appointments = await Appointment.create(appointmentsSeedData);
    console.log(`${appointments.length} appointments added to the database`);

    const doctors = await Doctor.create(doctorsSeedData);
    console.log(`${doctors.length} doctors added to the database`);

    const patients = await Patient.create(patientSeedData);
    console.log(`${patients.length} patients added to the database`);

    const services = await Service.create(serviceSeedData);
    console.log(`${services.length} services added to the database`);

    const users = await User.create(userSeedData);
    console.log(`${users.length} users added to the database`);

    console.log("goodbye");
  } catch (err) {
    console.log("something went wrong with the database", err);
  }

  disconnectDb();
}

seed();
