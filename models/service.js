import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  doctors: [{ type: mongoose.Types.ObjectId, ref: 'Doctor' }],
  appointments: [{ type: mongoose.Types.ObjectId, ref: 'Appointment' }],
})

serviceSchema.plugin(mongooseUniqueValidator)

const Service = mongoose.model('Service', serviceSchema)

export default Service
