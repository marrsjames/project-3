import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const doctorSchema = new mongoose.Schema({
  name: String,
  //   createdBy: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: 'User',
  //     required: true,
  //   },
})

doctorSchema.plugin(mongooseUniqueValidator)

const Doctor = mongoose.model('Doctor', doctorSchema)

export default Doctor
