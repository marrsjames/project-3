import express from 'express'
import doctorsController from '../controllers/doctorsController.js'
import servicesController from '../controllers/servicesController.js'
import patientsController from '../controllers/patientsController.js'
import userController from '../controllers/userController.js'
import appointmentsController from '../controllers/appointmentsController.js'

import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router
  .route('/doctors')
  .get(doctorsController.getAllDoctors)
  .post(secureRoute, doctorsController.createDoctor);

router
  .route('/doctors/:id')
  .get(doctorsController.getDoctor)
  .put(secureRoute, doctorsController.updateDoctor)
  .delete(secureRoute, doctorsController.deleteDoctor);

router
  .route("/patients")
  .get(secureRoute, patientsController.getAllPatients) // this needs to be secure, but also should be specific to user. Patient shouldn't be able to see other patients.
  .post(secureRoute, patientsController.createPatient);

router
  .route("/patients/:id")
  .get(patientsController.getPatient)
  .put(secureRoute, patientsController.updatePatient)
  .delete(secureRoute, patientsController.deletePatient);

router
  .route("/services")
  .get(servicesController.getAllServices)
  .post(secureRoute, servicesController.createService);

router
  .route("/services/:id")
  .get(servicesController.getService)
  .put(secureRoute, servicesController.updateService)
  .delete(secureRoute, servicesController.deleteService);

router.route("/register").post(userController.registerUser);

router.route("/login").post(userController.loginUser);

router
  .route('/appointments')
  .get(appointmentsController.getAllAppointments)
  .post(appointmentsController.createAppointment)

router.route('/admin/users').get(userController.getAllUsers)
router.route('/admin/promote').get(userController.promoteUser)
router.route('/admin/demote').get(userController.demoteUser)

export default router