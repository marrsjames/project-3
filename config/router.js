import express from "express";
import doctorsController from "../controllers/doctorsController.js";
import patientsController from "../controllers/patientsController.js";

const router = express.Router();

router.route("/doctors").get(doctorsController.getAllDoctors);
router.route("/patients").get(patientsController.getAllPatients);

export default router;
