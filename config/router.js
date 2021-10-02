import express from "express";
import doctorsController from "../controllers/doctorsController.js";
import patientsController from "../controllers/patientsController.js";

const router = express.Router();


router
  .route('/doctors')
  .get(doctorsController.getAllDoctors)
  .post(doctorsController.createDoctor)

router
  .route('/doctors/:id')
  .get(doctorsController.getDoctor)
  .put(doctorsController.updateDoctor)
  .delete(doctorsController.deleteDoctor)

router.route("/patients").get(patientsController.getAllPatients);

export default router;
