import Doctor from "../models/doctor.js";

async function getAllDoctors(_req, res, next) {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json(doctors);
  } catch (err) {
    next(err);
  }
}

async function createDoctor(req, res, next) {
  try {
    const newDoctor = await Doctor.create(req.body)

    return res.status(201).json(newDoctor)
  } catch (err) {
    next(err)
  }
}

async function getDoctor(req, res, next) {
  const id = req.params.id
  try {
    const doctor = await Doctor.findById(id)
    if (!doctor) {
      return res.status(404).send({ message: 'doctor does not exist' })
    }
    return res.status(200).json(doctor)
  } catch (err) {
    next(err)
  }
}

async function updateDoctor(req, res, next) {
  const id = req.params.id
  try {
    const doctor = await Doctor.findById(id)
    if (!doctor) {
      return res.status(404).send({ message: 'doctor does not exist' })
    }
    doctor.set(req.body)
    const savedDoctor = await doctor.save()
    return res.status(200).json(savedDoctor)
  } catch (err) {
    next(err)
  }
}

async function deleteDoctor(req, res, next) {
  const id = req.params.id
  try {
    const doctor = await Doctor.findById(id)
    if (!doctor) {
      return res.status(404).send({ message: 'doctor does not exist' })
    }
    await doctor.remove()
    return res.status(200).json(doctor)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllDoctors,
  createDoctor,
  getDoctor,
  updateDoctor,
  deleteDoctor,
}