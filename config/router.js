import express from 'express'
import doctorsController from '../controllers/doctorsController.js'

const router = express.Router()

router
  .route('/doctors')
  .get(doctorsController.getAllDoctors)
  .post(doctorsController.createDoctor)

router
  .route('/doctors/:id')
  .get(doctorsController.getDoctor)
  .put(doctorsController.updateDoctor)
  .delete(doctorsController.deleteDoctor)

export default router
