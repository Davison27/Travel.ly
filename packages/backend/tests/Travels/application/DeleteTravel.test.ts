import { DeleteTravelById } from '../../../src/Travels/application/DeleteTravelById'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('DeleteTravel', () => {
  it('should delete a travel by id', async () => {
    const deleteTravelById = new DeleteTravelById(travelRepository)
    const expectedTravel = new Travel(
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

    await deleteTravelById.run('travel-id')

    await expect(travelRepository.delete).toHaveBeenCalledTimes(1)
    await expect(travelRepository.delete).toHaveBeenCalledWith(expectedTravel)
  })
})
