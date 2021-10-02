import Doctor from "../models/doctor.js";
import { doctorsSeedData } from "./doctorsSeedData.js";
import { patientSeedData } from "./patientSeedData.js";
import { connectDb, truncateDb, disconnectDb } from "./helpers.js";
import Patient from "../models/patient.js";

async function seed() {
  try {
    await connectDb();
    console.log("connect to database");

    await truncateDb();
    console.log("database dropped");

    const doctors = await Doctor.create(doctorsSeedData);
    console.log(`${doctors.length} doctors added to the database`);

    const patients = await Patient.create(patientSeedData);
    console.log(`${patients.length} patients added to the database`);

    console.log("goodbye");
  } catch (err) {
    console.log("something went wrong with the database", err);
  }

  disconnectDb();
}

seed();
