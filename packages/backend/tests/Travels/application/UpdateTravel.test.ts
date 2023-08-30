import { UpdateTravel } from '../../../src/Travels/application/UpdateTravel'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('UpdateTravel', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should update a travel', async () => {
    const updateTravel = new UpdateTravel(travelRepository)
    const oldTravel = new Travel(
      'travel-id',
      'travel-name',
      'travel-owner',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      [],
      new Expenses(0, 0, 0, 0, 0),
      'travel-description',
    )
    const updatedTravel = new Travel(
      oldTravel.id,
      'travel-name-updated',
      'travel-owner',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      oldTravel.activities,
      new Expenses(0, 0, 0, 0, 0),
      'travel-description-updated',
      false,
      2,
    )

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(oldTravel)
    await updateTravel.run(oldTravel.id, updatedTravel)

    expect(updatedTravel.id).toEqual(oldTravel.id)
    expect(updatedTravel.name).not.toEqual(oldTravel.name)
    expect(updatedTravel.description).not.toEqual(oldTravel.description)
    expect(updatedTravel.travelers).not.toEqual(oldTravel.travelers)
    expect(updatedTravel.startDate).toEqual(oldTravel.startDate)
    expect(updatedTravel.endDate).toEqual(oldTravel.endDate)
    expect(updatedTravel.activities).toEqual(oldTravel.activities)
    expect(updatedTravel.expenses).toEqual(oldTravel.expenses)
    expect(travelRepository.update).toHaveBeenCalledWith(
      oldTravel,
      updatedTravel,
    )
  })
  it('should not update a travel if travel does not exist', async () => {
    const updateTravel = new UpdateTravel(travelRepository)
    const oldTravel = new Travel(
      'travel-id',
      'travel-name',
      'travel-owner',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      [],
      new Expenses(0, 0, 0, 0, 0),
      'travel-description',
    )
    const updatedTravel = new Travel(
      oldTravel.id,
      'travel-name-updated',
      'travel-owner',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      oldTravel.activities,
      new Expenses(0, 0, 0, 0, 0),
      'travel-description-updated',
      false,
      2,
    )

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(null)
    await updateTravel.run(oldTravel.id, updatedTravel)

    expect(travelRepository.update).not.toHaveBeenCalled()
  })
})
