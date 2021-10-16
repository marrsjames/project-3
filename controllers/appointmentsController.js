import Appointment from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import Patient from "../models/patient.js";
import Service from "../models/service.js";

async function getAllAppointments(_req, res, next) {
  try {
    const appointments = await Appointment.find()
      .populate("service")
      .populate("doctor")
      .populate("patient");
    return res.status(200).json(appointments);
  } catch (err) {
    next(err);
  }
}

async function createAppointment(req, res, next) {
  try {
    //for security, req.current user needs to be used after the spread
    const newAppointment = await Appointment.create({
      ...req.body,
      createdBy: req.currentUser,
    });

    await Doctor.updateMany(
      { _id: newAppointment.doctor },
      { $push: { appointments: newAppointment._id } }
    );

    await Patient.updateMany(
      { _id: newAppointment.patient },
      { $push: { appointments: newAppointment._id } }
    );

    await Service.updateMany(
      { _id: newAppointment.service },
      { $push: { appointments: newAppointment._id } }
    );

    const populateAppointments = await Appointment.findById(newAppointment._id)
      .populate("service")
      .populate("doctor")
      .populate("patient");

    return res.status(201).json(populateAppointments);
  } catch (err) {
    next(err);
  }
}

async function editAppointment(req, res, next) {
  try {
    const id = req.params.id;

    const appt = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!appt) {
      return res.status(404).send({ message: "Unable to find appointment" });
    }

    const newAppointment = await Appointment.create({
      ...req.body,
      createdBy: req.currentUser,
    });

    appt.set(req.body);
    const saveAppt = await appt.save();

    await Doctor.updateMany(
      { _id: newAppointment.doctor },
      { $push: { appointments: newAppointment._id } }
    );

    await Patient.updateMany(
      { _id: newAppointment.patient },
      { $push: { appointments: newAppointment._id } }
    );

    await Service.updateMany(
      { _id: newAppointment.service },
      { $push: { appointments: newAppointment._id } }
    );

    const populateAppointments = await Appointment.findById(newAppointment._id)
      .populate("service")
      .populate("doctor")
      .populate("patient");

    res.send(appt);
    return res.status(201).json(populateAppointments);
  } catch (err) {
    next(err);
  }
}

async function deleteAppointment(req, res, next) {
  try {
    const id = req.params.id;

    const appt = await Appointment.findByIdAndDelete(id);

    if (!appt) {
      return res.status(404).send({ message: "Unable to find appointment" });
    }

    await appt.remove();

    res.send(appt);

    return res.status(204).json(appt);
  } catch (error) {
    next(error);
  }
}

export default {
  getAllAppointments,
  createAppointment,
  editAppointment,
  deleteAppointment,
};
