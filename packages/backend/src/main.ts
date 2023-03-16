import express from 'express';
import Router from "express-promise-router"
import { CreateTravel } from './Travels/application/CreateTravel';
import { CreateTravelController } from './Travels/infrastructure/CreateTravelController';
import { InMemoryTravelRepository } from './Travels/infrastructure/InMemoryTravelRepository';

const app = express();
const router = Router();
app.use(router);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

router.get('/api/status', async (req, res) => {
  res.status(200).send({ message: 'OK' });
});

const travelRepository = new InMemoryTravelRepository()
const useCase = new CreateTravel(travelRepository)
const createTravelController = new CreateTravelController(useCase)

router.post('/api/travels', createTravelController.handle)
