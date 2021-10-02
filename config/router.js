import express from 'express'
import doctorsController from '../controllers/doctorsController.js'

const router = express.Router()

router.route('/doctors').get(doctorsController.getAllDoctors)

export default router
