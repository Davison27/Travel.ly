/* eslint-disable no-shadow */
import axios from 'axios'

// import { Activities } from '../interfaces/Activities'
// import { Expenses } from '../interfaces/Expenses'

const myApi = 'http://localhost:3333/api'

const getStatus = async () => {
  const response = await axios.get(`${myApi}/status`)
  console.log(response.data)
  return response.data
}

const getTravels = async () => {
  const response = await axios.get(`${myApi}/travels`)
  console.log(response.data)
  return response.data
}

const getTravel = async (id: string) => {
  const response = await axios.get(`${myApi}/travels/${id}`)
  console.log(response.data)
  return response.data
}

const postTravel = async (
  // Activities: Activities,
  description: string,
  endDate: string,
  expenses: number,
  id: string,
  name: string,
  shared: boolean,
  startDate: string,
  travelers: number,
  imageUrl: string,
) => {
  const request = await axios.post(`${myApi}/travels`, {
    // Activities,
    description,
    endDate,
    expenses,
    id,
    imageUrl,
    name,
    shared,
    startDate,
    travelers,
  })
  console.log(request.data)
  return request.data
}

const updateTravel = async (id: string) => {
  const request = await axios.put(`${myApi}/travels/${id}`)
  console.log(request.data)
  return request.data
}

const deleteTravel = async (id: string) => {
  const request = await axios.delete(`${myApi}/travels/${id}`)
  console.log(request.data)
  return request.data
}

export default {
  deleteTravel,
  getStatus,
  getTravel,
  getTravels,
  postTravel,
  updateTravel,
}
