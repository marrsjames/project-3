import Doctor from "../models/doctor.js";
import Service from "../models/service.js";
import { doctorsSeedData } from "./doctorsSeedData.js";
import { serviceSeedData } from "./serviceSeedData.js";
import { connectDb, truncateDb, disconnectDb } from "./helpers.js";
import dotenv from "dotenv";

dotenv.config();

async function seed() {
  try {
    console.log("connect to database");
    await connectDb();

    console.log("database dropped");
    await truncateDb();

    const doctors = await Doctor.create(doctorsSeedData);
    console.log(`${doctors.length} doctors added to the database`);

    const services = await Service.create(serviceSeedData);
    console.log(`${services.length} services added to the database`);

    console.log("goodbye");
  } catch (err) {
    console.log("something went wrong with the database", err);
  }

  disconnectDb();
}

seed();
