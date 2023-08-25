import { UpdateActivityById } from '../../../src/Travels/application/UpdateActivityById'
import { Activity } from '../../../src/Travels/domain/Activity'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('UpdateActivityById', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should update an activity', async () => {
    const updateActivityById = new UpdateActivityById(travelRepository)
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
    const oldActivity = new Activity(
      travel.id,
      'activity-id',
      'activity-name',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      'Accomodation',
      'activity-image-url',
    )
    const updatedActivity = new Activity(
      oldActivity.travelId,
      oldActivity.activityId,
      'activity-name-updated',
      oldActivity.startDate,
      oldActivity.endDate,
      oldActivity.category,
      oldActivity.imageUrl,
    )

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(travel)
    await updateActivityById.run(
      travel.id,
      updatedActivity.activityId,
      updatedActivity,
    )

    expect(updatedActivity.travelId).toEqual(oldActivity.travelId)
    expect(updatedActivity.activityId).toEqual(oldActivity.activityId)
    expect(updatedActivity.name).not.toEqual(oldActivity.name)
    expect(updatedActivity.startDate).toEqual(oldActivity.startDate)
    expect(updatedActivity.endDate).toEqual(oldActivity.endDate)
    expect(updatedActivity.category).toEqual(oldActivity.category)
    expect(updatedActivity.imageUrl).toEqual(oldActivity.imageUrl)
    expect(travelRepository.updateActivity).toHaveBeenCalledWith(
      travel.activities,
      travel.id,
    )
  })
})
