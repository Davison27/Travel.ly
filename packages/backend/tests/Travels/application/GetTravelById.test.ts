import { GetTravelById } from '../../../src/Travels/application/GetTravelById'
import { travelRepository } from './JestFunctions'

describe('FindTravelById', () => {
  it('should find a travel by id', async () => {
    const findTravelById = new GetTravelById(travelRepository)
    const expectedId = 'travel-id'

    await findTravelById.run('travel-id')

    expect(travelRepository.findById).toHaveBeenCalledWith(expectedId)
  })
})
