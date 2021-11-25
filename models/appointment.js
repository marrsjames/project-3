import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const appointmentSchema = new mongoose.Schema({
  date: Date,
  service: [{ type: mongoose.Schema.ObjectId, ref: 'Service', name: 'string' }],
  doctor: [{ type: mongoose.Schema.ObjectId, ref: 'Doctor', name: 'string' }],
  patient: [{ type: mongoose.Schema.ObjectId, ref: 'Patient', name: 'string' }],
})

appointmentSchema.plugin(mongooseUniqueValidator)

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
