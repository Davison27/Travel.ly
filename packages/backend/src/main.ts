import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import Router from 'express-promise-router'
import mongoose from 'mongoose'

import { BuildListTravelsView } from './Travels/application/BuildListTravelsView'
import { CreateActivity } from './Travels/application/CreateActivity'
import { CreateTravel } from './Travels/application/CreateTravel'
import { DeleteActivityById } from './Travels/application/DeleteActivityById '
import { DeleteTravelById } from './Travels/application/DeleteTravelById'
import { GetTravelById } from './Travels/application/GetTravelById'
import { UpdateActivityById } from './Travels/application/UpdateActivityById'
import { UpdateTravel } from './Travels/application/UpdateTravel'
import { CreateActivityController } from './Travels/infrastructure/Controllers/CreateActivityController '
import { CreateTravelController } from './Travels/infrastructure/Controllers/CreateTravelController'
import { DeleteActivityByIdController } from './Travels/infrastructure/Controllers/DeleteActivityByIdController'
import { DeleteTravelByIdController } from './Travels/infrastructure/Controllers/DeleteTravelByIdController'
import { GetTravelByIdController } from './Travels/infrastructure/Controllers/GetTravelByIdController'
import { GetTravelsController } from './Travels/infrastructure/Controllers/GetTravelsController'
import { UpdateActivityByIdController } from './Travels/infrastructure/Controllers/UpdateActivityByIdController'
import { UpdateTravelController } from './Travels/infrastructure/Controllers/UpdateTravelController'
import { MongoTravelRepository } from './Travels/infrastructure/repository/MongoTravelRepository'

dotenv.config()
const app = express()
const router = Router()

app.use(cors())
app.use(bodyParser.json())
app.use(router)

const port = process.env.PORT || 3333

router.get('/api/status', async (req, res) => {
  res.status(200).send({ message: 'OK' })
})

const travelRepository = new MongoTravelRepository()

const buildListTravelsView = new BuildListTravelsView(travelRepository)
const getTravelsController = new GetTravelsController(buildListTravelsView)
router.get('/api/travels/:ownerId', async (req, res) =>
  getTravelsController.handle(req, res),
)

const getTravelById = new GetTravelByIdController(
  new GetTravelById(travelRepository),
)
router.get('/api/travel/:id', async (req, res) =>
  getTravelById.handle(req, res),
)

const travelUseCase = new CreateTravel(travelRepository)
const createTravelController = new CreateTravelController(travelUseCase)
router.post('/api/travels', async (req, res) => {
  return createTravelController.handle(req, res)
})

const deleteTravelById = new DeleteTravelByIdController(
  new DeleteTravelById(travelRepository),
)
router.delete('/api/travels/:id', async (req, res) =>
  deleteTravelById.handle(req, res),
)

const updateTravel = new UpdateTravelController(
  new UpdateTravel(travelRepository),
)
router.put('/api/travels/:id', async (req, res) =>
  updateTravel.handle(req, res),
)

const saveActivity = new CreateActivityController(
  new CreateActivity(travelRepository),
)
router.post('/api/travels/:id/activities', async (req, res) =>
  saveActivity.handle(req, res),
)

const deleteActivity = new DeleteActivityByIdController(
  new DeleteActivityById(travelRepository),
)
router.delete(
  '/api/travels/:travelId/activities/:activityId',
  async (req, res) => deleteActivity.handle(req, res),
)

const updateActivity = new UpdateActivityByIdController(
  new UpdateActivityById(travelRepository),
)
router.put('/api/travels/:travelId/activities/:activityId', async (req, res) =>
  updateActivity.handle(req, res),
)

const start = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
