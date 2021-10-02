import Service from '../models/service.js'

async function getAllServices(_req, res, next) {
  try {
    const services = await Service.find()
    return res.status(200).json(services)
  } catch (err) {
    next(err)
  }
}

async function createService(req, res, next) {
  try {
    const newService = await Service.create(req.body)

    return res.status(201).json(newService)
  } catch (err) {
    next(err)
  }
}

async function getService(req, res, next) {
  const id = req.params.id
  try {
    const service = await Service.findById(id)
    if (!service) {
      return res.status(404).send({ message: 'service does not exist' })
    }
    return res.status(200).json(service)
  } catch (err) {
    next(err)
  }
}

async function updateService(req, res, next) {
  const id = req.params.id
  try {
    const service = await Service.findById(id)
    if (!service) {
      return res.status(404).send({ message: 'service does not exist' })
    }
    service.set(req.body)
    const savedService = await service.save()
    return res.status(200).json(savedService)
  } catch (err) {
    next(err)
  }
}

async function deleteService(req, res, next) {
  const id = req.params.id
  try {
    const service = await Service.findById(id)
    if (!service) {
      return res.status(404).send({ message: 'service does not exist' })
    }
    await service.remove()
    return res.status(200).json(service)
  } catch (err) {
    next(err)
  }
}

export default {
  getAllServices,
  createService,
  getService,
  updateService,
  deleteService,
}
