import { DeleteTravelById } from '../../../src/Travels/application/DeleteTravelById'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { notifier, travelRepository } from './JestFunctions'

describe('DeleteTravel', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  const travel = new Travel(
    'travel-id',
    'travel-name',
    'travel-owner',
    new Date('1970-01-01T00:00:00.000Z'),
    new Date('1970-01-01T00:00:00.000Z'),
    [],
    new Expenses(0, 0, 0, 0, 0),
    'travel-description',
    false,
    0,
  )
  it('should delete a travel by id', async () => {
    const deleteTravelById = new DeleteTravelById(travelRepository, notifier)

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(travel)
    await deleteTravelById.run(travel.id)

    expect(travelRepository.delete).toHaveBeenCalledWith(travel)
  })
  it('should not delete a travel if travel does not exist', async () => {
    const deleteTravelById = new DeleteTravelById(travelRepository, notifier)

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(null)
    await deleteTravelById.run(travel.id)

    expect(travelRepository.delete).not.toHaveBeenCalled()
  })
  it('should notify the deletion of a travel', async () => {
    const deleteTravelById = new DeleteTravelById(travelRepository, notifier)

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(travel)
    await deleteTravelById.run(travel.id)

    expect(notifier.deleteTravelNotification).toHaveBeenCalled()
  })
})
