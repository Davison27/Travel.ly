import { CreateTravel } from '../../../src/Travels/application/CreateTravel'
import { Travel } from '../../../src/Travels/domain/Travel'

describe('CreateTravel', () => {
  it('should create a travel', async () => {
    const travelRepository = { save: jest.fn() }
    const createTravel = new CreateTravel(travelRepository)

    await createTravel.run({ id: 'travel-id', name: 'travel-name' })

    const expectedTravel = new Travel('travel-id', 'travel-name')
    expect(travelRepository.save).toHaveBeenCalledWith(expectedTravel)
  })
})
