import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const appointmentSchema = new mongoose.Schema({
  date: Date,
  service: [{ type: mongoose.Types.ObjectId, ref: 'Service' }],
  doctor: [{ type: mongoose.Types.ObjectId, ref: 'Doctor' }],
  patient: [{ type: mongoose.Types.ObjectId, ref: 'Patient' }],
})

appointmentSchema.plugin(mongooseUniqueValidator)

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
