import { CreateActivity } from '../../../src/Travels/application/CreateActivity'
import { Activity } from '../../../src/Travels/domain/Activity'
import { Expenses } from '../../../src/Travels/domain/Expenses'
import { Travel } from '../../../src/Travels/domain/Travel'
import { travelRepository } from './JestFunctions'

describe('CreateActivity', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should create an activity', async () => {
    const createActivity = new CreateActivity(travelRepository)
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
    const activity = new Activity(
      travel.id,
      'activity-id',
      'activity-name',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      'Accomodation',
      'activity-image-url',
    )

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(travel)
    await createActivity.run(activity)

    expect(travel.id).toEqual(activity.travelId)
    expect(travelRepository.saveActivity).toHaveBeenCalledWith(activity, travel)
  })
  it('should not create an activity if travel does not exist', async () => {
    const createActivity = new CreateActivity(travelRepository)
    const activity = new Activity(
      'travel-id-not-exist',
      'activity-id',
      'activity-name',
      new Date('1970-01-01T00:00:00.000Z'),
      new Date('1970-01-01T00:00:00.000Z'),
      'Accomodation',
      'activity-image-url',
    )

    jest.spyOn(travelRepository, 'findById').mockResolvedValue(null)
    await createActivity.run(activity)

    expect(travelRepository.saveActivity).not.toHaveBeenCalled()
  })
})
