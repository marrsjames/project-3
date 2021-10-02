import Doctor from "../models/doctor.js";

async function getAllDoctors(_req, res, next) {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json(doctors);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllDoctors,
};
