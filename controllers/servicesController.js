import Service from "../models/service.js";

async function getAllServices(_req, res, next) {
  try {
    const services = await Service.find();
    return res.status(200).json(services);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllServices,
};
