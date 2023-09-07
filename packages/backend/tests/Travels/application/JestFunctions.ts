export const travelRepository = {
  delete: jest.fn(),
  deleteActivity: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
  save: jest.fn(),
  saveActivity: jest.fn(),
  update: jest.fn(),
  updateActivity: jest.fn(),
}

export const notifier = {
  createTravelNotification: jest.fn(),
  deleteTravelNotification: jest.fn(),
  updateTravelNotification: jest.fn(),
}
