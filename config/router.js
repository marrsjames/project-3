import express from "express";
import doctorsController from "../controllers/doctorsController.js";
import servicesController from "../controllers/servicesController.js";
import patientsController from "../controllers/patientsController.js";
import userController from "../controllers/userController.js";

const router = express.Router()

router
  .route("/doctors")
  .get(doctorsController.getAllDoctors)
  .post(doctorsController.createDoctor);

router
  .route("/doctors/:id")
  .get(doctorsController.getDoctor)
  .put(doctorsController.updateDoctor)
  .delete(doctorsController.deleteDoctor);

router
  .route('/patients')
  .get(patientsController.getAllPatients)
  .post(patientsController.createPatient)

router
  .route('/patients/:id')
  .get(patientsController.getPatient)
  .put(patientsController.updatePatient)
  .delete(patientsController.deletePatient)

router
  .route('/services')
  .get(servicesController.getAllServices)
  .post(servicesController.createService)

router
  .route('/services/:id')
  .get(servicesController.getService)
  .put(servicesController.updateService)
  .delete(servicesController.deleteService)

router.route("/admin/users").get(userController.getAllUsers);
router.route("/admin/promote").get(userController.promoteUser);
router.route("/admin/demote").get(userController.demoteUser);

export default router;

