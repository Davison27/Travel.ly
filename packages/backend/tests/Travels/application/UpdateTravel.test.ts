import { UpdateTravel } from '../../../src/Travels/application/UpdateTravel'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('UpdateTravel', () => {
  it('should update a travel', async () => {
    const updateTravel = new UpdateTravel(travelRepository)
    const oldTravelId = 'travel-id'

    const newTravel = new Travel(
      'travel-id',
      'travel-name-updated',
      'travel-owner',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      [],
      new Expenses(0, 0, 0, 0, 0),
      'travel-description',
      false,
      0,
    )

    await updateTravel.run(oldTravelId, newTravel)

    expect(travelRepository.update).toHaveBeenCalledWith(oldTravelId, newTravel)
  })
})
