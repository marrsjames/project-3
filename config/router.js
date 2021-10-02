import express from "express";
import doctorsController from "../controllers/doctorsController.js";
import servicesController from "../controllers/servicesController.js";

const router = express.Router();

router.route("/doctors").get(doctorsController.getAllDoctors);

router.route("/services").get(servicesController.getAllServices);

export default router;
