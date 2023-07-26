import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import Router from 'express-promise-router'
import mongoose from 'mongoose'

import { CreateTravel } from './Travels/application/CreateTravel'
import { DeleteTravelById } from './Travels/application/DeleteTravelById'
import { GetTravelById } from './Travels/application/GetTravelById'
import { UpdateTravel } from './Travels/application/UpdateTravel'
import { BuildListTravelsView } from './Travels/infrastructure/BuildListTravelsView'
import { CreateTravelController } from './Travels/infrastructure/Controllers/CreateTravelController'
import { DeleteTravelByIdController } from './Travels/infrastructure/Controllers/DeleteTravelByIdController'
import { GetTravelByIdController } from './Travels/infrastructure/Controllers/GetTravelByIdController'
import { GetTravelsController } from './Travels/infrastructure/Controllers/GetTravelsController'
import { UpdateTravelController } from './Travels/infrastructure/Controllers/UpdateTravel'
import { MongoTravelRepository } from './Travels/infrastructure/repository/MongoTravelRepository'
// import { CreateUser } from './Users/application/CreateUser'
// import { CreateUserController } from './Users/infrastructure/CreateUserController'
// import { InMemoryUserRepository } from './Users/infrastructure/InMemoryUserRepository'

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

const travelUseCase = new CreateTravel(travelRepository)
const createTravelController = new CreateTravelController(travelUseCase)
router.post('/api/travels', async (req, res) => {
  return createTravelController.handle(req, res)
})

const buildListTravelsView = new BuildListTravelsView(travelRepository)
const getTravelsController = new GetTravelsController(buildListTravelsView)
router.get('/api/travels', async (req, res) =>
  getTravelsController.handle(req, res),
)

const getTravelById = new GetTravelByIdController(
  new GetTravelById(travelRepository),
)
router.get('/api/travels/:id', async (req, res) =>
  getTravelById.handle(req, res),
)

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

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017')
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()

// const userRepository = new InMemoryUserRepository()
// const userUseCase = new CreateUser(userRepository)
// const createUserController = new CreateUserController(userUseCase)
// router.post('/api/users', async (req, res) =>
//   createUserController.handle(req, res),
// )
