import { CreateTravel } from '../../../src/Travels/application/CreateTravel'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('CreateTravel', () => {
  it('should create a travel', async () => {
    const createTravel = new CreateTravel(travelRepository)
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

    await createTravel.run({
      budget: 0,
      description: 'travel-description',
      endDate: new Date('1970-01-01T00:00:00.000Z'),
      id: 'travel-id',
      name: 'travel-name',
      ownerId: 'travel-owner',
      startDate: new Date('1970-01-01T00:00:00.000Z'),
      travelers: 0,
    })

    expect(travelRepository.save).toHaveBeenCalledWith(expectedTravel)
  })
})
