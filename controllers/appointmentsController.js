import Appointment from '../models/appointment.js'
import Doctor from '../models/doctor.js'
import Patient from '../models/patient.js'
import Service from '../models/service.js'

async function getAllAppointments(_req, res, next) {
  try {
    const appointments = await Appointment.find()
      .populate('service')
      .populate('doctor')
      .populate('patient')
    return res.status(200).json(appointments)
  } catch (err) {
    next(err)
  }
}

async function createAppointment(req, res, next) {
  try {
    //for security, req.current user needs to be used after the spread
    const newAppointment = await Appointment.create({
      ...req.body,
      createdBy: req.currentUser,
    })

    await Doctor.updateMany(
      { _id: newAppointment.doctor },
      { $push: { appointments: newAppointment._id } }
    )

    await Patient.updateMany(
      { _id: newAppointment.patient },
      { $push: { appointments: newAppointment._id } }
    )

    await Service.updateMany(
      { _id: newAppointment.service },
      { $push: { appointments: newAppointment._id } }
    )

    return res.status(201).json(newAppointment)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllAppointments,
  createAppointment,
}
