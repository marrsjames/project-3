import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const patientSchema = new mongoose.Schema({
  name: String,
  address: String,
  NHSNumber: String,
  Age: Number,
  HealthConditions: String,
  appointments: [{ type: mongoose.Schema.ObjectId, ref: 'Appointment' }],
})

patientSchema.plugin(mongooseUniqueValidator)

const Patient = mongoose.model('Patient', patientSchema)

export default Patient
