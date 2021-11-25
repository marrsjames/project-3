import Patient from '../models/patient.js'

async function getAllPatients(_req, res, next) {
  try {
    const patients = await Patient.find()
    return res.status(200).json(patients)
  } catch (err) {
    next(err)
  }
}
async function createPatient(req, res, next) {
  try {
    const newPatient = await Patient.create(req.body)

    return res.status(201).json(newPatient)
  } catch (err) {
    next(err)
  }
}

async function getPatient(req, res, next) {
  const id = req.params.id
  try {
    const patient = await Patient.findById(id)
    if (!patient) {
      return res.status(404).send({ message: 'patient does not exist' })
    }
    return res.status(200).json(patient)
  } catch (err) {
    next(err)
  }
}

async function updatePatient(req, res, next) {
  const id = req.params.id
  try {
    const patient = await Patient.findById(id)
    if (!patient) {
      return res.status(404).send({ message: 'patient does not exist' })
    }
    patient.set(req.body)
    const savedPatient = await patient.save()
    return res.status(200).json(savedPatient)
  } catch (err) {
    next(err)
  }
}

async function deletePatient(req, res, next) {
  const id = req.params.id
  try {
    const patient = await Patient.findById(id)
    if (!patient) {
      return res.status(404).send({ message: 'patient does not exist' })
    }
    await patient.remove()
    return res.status(200).json(patient)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllPatients,
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
}
