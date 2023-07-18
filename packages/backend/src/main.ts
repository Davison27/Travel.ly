import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import Router from 'express-promise-router'

import { CreateTravel } from './Travels/application/CreateTravel'
import { DeleteTravelById } from './Travels/application/DeleteTravelById'
import { GetTravelById } from './Travels/application/GetTravelById'
import { BuildListTravelsView } from './Travels/infrastructure/BuildListTravelsView'
import { CreateTravelController } from './Travels/infrastructure/CreateTravelController'
import { DeleteTravelByIdController } from './Travels/infrastructure/DeleteTravelByIdController'
import { GetTravelByIdController } from './Travels/infrastructure/GetTravelByIdController'
import { GetTravelsController } from './Travels/infrastructure/GetTravelsController'
import { InMemoryTravelRepository } from './Travels/infrastructure/InMemoryTravelRepository'
// import { CreateUser } from './Users/application/CreateUser'
// import { CreateUserController } from './Users/infrastructure/CreateUserController'
// import { InMemoryUserRepository } from './Users/infrastructure/InMemoryUserRepository'

const app = express()
const router = Router()

app.use(cors())
app.use(bodyParser.json())
app.use(router)

const port = process.env.PORT || 3333

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})

server.on('error', console.error)

router.get('/api/status', async (req, res) => {
  res.status(200).send({ message: 'OK' })
})

const travelRepository = new InMemoryTravelRepository()

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

// const userRepository = new InMemoryUserRepository()
// const userUseCase = new CreateUser(userRepository)
// const createUserController = new CreateUserController(userUseCase)
// router.post('/api/users', async (req, res) =>
//   createUserController.handle(req, res),
// )
