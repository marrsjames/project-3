import Patient from "../models/patient.js";

async function getAllPatients(_req, res, next) {
  try {
    const patients = await Patient.find();
    return res.status(200).json(patients);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllPatients,
};
