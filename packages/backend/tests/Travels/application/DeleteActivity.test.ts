import { DeleteActivityById } from '../../../src/Travels/application/DeleteActivityById '
import { Activity } from '../../../src/Travels/domain/Activity'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('DeleteActivityById', () => {
  it('should delete a travel by id', async () => {
    const deleteActivityById = new DeleteActivityById(travelRepository)
    const travel = new Travel(
      'travel-id',
      'travel-name',
      'travel-owner',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      [
        new Activity(
          'travel-id',
          'activity-id',
          'activity-name',
          new Date('1970-01-01T00:00:00.000Z'),
          new Date('1970-01-01T00:00:00.000Z'),
          'Accomodation',
          'activity-image-url',
        ),
      ],
      new Expenses(0, 0, 0, 0, 0),
      'travel-description',
      false,
      0,
    )

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(travel)
    await deleteActivityById.run(travel.id, travel.activities[0].activityId)

    expect(travelRepository.deleteActivity).toHaveBeenCalledWith(
      travel.activities,
      travel.id,
    )
  })
})
