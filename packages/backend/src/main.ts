import express from 'express'
import Router from 'express-promise-router'

//Travels useCase imports
import { CreateTravel } from './Travels/application/CreateTravel'
import { BuildListTravelsView } from './Travels/infrastructure/BuildListTravelsView'
import { CreateTravelController } from './Travels/infrastructure/CreateTravelController'
import { GetTravelsController } from './Travels/infrastructure/GetTravelsController'
import { InMemoryTravelRepository } from './Travels/infrastructure/InMemoryTravelRepository'
//Users useCase imports
import { CreateUser } from './Users/application/CreateUser'
import { CreateUserController } from './Users/infrastructure/CreateUserController'
import { InMemoryUserRepository } from './Users/infrastructure/InMemoryUserRepository'

const app = express()
const router = Router()
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
router.post('/api/travels', createTravelController.handle)

const buildListTravelsView = new BuildListTravelsView(travelRepository)
const getTravelsController = new GetTravelsController(buildListTravelsView)
router.get('/api/travels', getTravelsController.handle)

const userRepository = new InMemoryUserRepository()
const userUseCase = new CreateUser(userRepository)
const createUserController = new CreateUserController(userUseCase)
router.post('/api/users', createUserController.handle)
