/* eslint-disable no-shadow */
import axios from 'axios'

import { Activities } from '../interfaces/Activities'
import { Expenses } from '../interfaces/Expenses'
import { Travel } from '../interfaces/Travel'

// import { Activities } from '../interfaces/Activities'
// import { Expenses } from '../interfaces/Expenses'

const myApi = 'http://localhost:3333/api'

const getStatus = async () => {
  const response = await axios.get(`${myApi}/status`)
  return response.data
}

const getTravels = async (ownerId: string) => {
  const response = await axios.get(`${myApi}/travels/${ownerId}`)
  return response.data
}

const getTravel = async (id: string) => {
  const response = await axios.get(`${myApi}/travel/${id}`)
  return response.data as Travel
}

const postTravel = async (
  description: string,
  endDate: Date,
  budget: number,
  id: string,
  name: string,
  shared: boolean,
  startDate: Date,
  travelers: number,
  imageUrl: string,
  ownerId: string,
) => {
  const request = await axios.post(`${myApi}/travels`, {
    budget,
    description,
    endDate,
    id,
    imageUrl,
    name,
    ownerId,
    shared,
    startDate,
    travelers,
  })
  return request.data
}

const updateTravel = async (
  description: string,
  activities: Activities[],
  endDate: Date,
  expenses: Expenses,
  id: string,
  name: string,
  shared: boolean,
  startDate: Date,
  travelers: number,
  imageUrl: string,
  ownerId: string,
) => {
  const request = await axios.put(`${myApi}/travels/${id}`, {
    activities,
    description,
    endDate,
    expenses,
    id,
    imageUrl,
    name,
    ownerId,
    shared,
    startDate,
    travelers,
  })
  return request.data
}

const deleteTravel = async (id: string) => {
  const request = await axios.delete(`${myApi}/travels/${id}`)
  return request.data
}

const postActivity = async (
  activityId: string,
  category: string,
  endDate: Date,
  name: string,
  startDate: Date,
  imageUrl: string,
  travelId: string,
  description?: string,
  documentUrls?: string,
  location?: string,
  price?: number,
  rooms?: number,
  transportType?: string,
) => {
  const request = await axios.post(`${myApi}/travels/${travelId}/activities`, {
    activityId,
    category,
    description,
    documentUrls,
    endDate,
    imageUrl,
    location,
    name,
    price,
    rooms,
    startDate,
    transportType,
    travelId,
  })
  return request.data
}

const deleteActivity = async (activityId: string, travelId: string) => {
  const request = await axios.delete(
    `${myApi}/travels/${travelId}/activities/${activityId}`,
  )
  return request.data
}

export default {
  deleteActivity,
  deleteTravel,
  getStatus,
  getTravel,
  getTravels,
  postActivity,
  postTravel,
  updateTravel,
}
