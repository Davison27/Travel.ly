/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Activities.scss'

import {
  ChevronLeftIcon,
  EditIcon,
  ExternalLinkIcon,
  ViewIcon,
} from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Icon,
  Img,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import CustomAlertDialog from '../../components/custom-alert-dialog/custom-alert-dialog'
import CustomModal from '../../components/custom-modal/custom-modal'
import api from '../../utils/api/api'
import { formatDate, formatHour } from '../../utils/functions/globalFunctions'
import { Activities } from '../../utils/interfaces/Activities'
import { Travel } from '../../utils/interfaces/Travel'
import FoodForm from '../ActivitiesForm/FoodForm/FoodForm'

function ActivitiesPage() {
  const [travel, setTravel] = useState<Travel>()
  const [activities, setActivities] = useState<Activities[]>([])
  const [activityToModify, setActivityToModify] = useState('')

  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id, activityToModify])
  const navigate = useNavigate()

  const travelTitle = travel?.name
  const travelStartDate = travel?.startDate
  const travelEndDate = travel?.endDate
  const travelId = travel?.id

  const travelData = travel?.activities.map(
    ({ activityId, category, endDate, imageUrl, startDate }: Activities) => (
      <button key={activityId}>
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Img
              src={imageUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                {category}
              </Heading>
              <Heading size="md" className="messageGrid">
                {formatHour(startDate)} - {formatHour(endDate)}
              </Heading>
            </Stack>
          </CardBody>
          <ButtonGroup spacing="3" className="buttonGrid">
            <Link to={`/travel/${travel.id}`}>
              <Button variant="outline" colorScheme="blue">
                <ViewIcon />
              </Button>
            </Link>
            <Button
              variant="outline"
              colorScheme="green"
              onClick={() => setActivityToModify(activityId)}
            >
              <EditIcon />
            </Button>
            <CustomAlertDialog
              travelId={travel.id}
              activityId={activityId}
              onDelete={() => {
                setActivities(
                  activities.filter(
                    (activity) => activity.activityId !== activityId,
                  ),
                )
              }}
            />
          </ButtonGroup>
        </Card>
      </button>
    ),
  )

  if (activityToModify) {
    const activity = travel?.activities.find(
      (acti) => acti.activityId === activityToModify,
    )
    return (
      <FoodForm
      // activity={activity!}
      // setActivityToModify={setActivityToModify}
      />
    )
  }

  return (
    <div>
      <div className="titleButton">
        <div className="backButton">
          <Button onClick={() => navigate(-1)}>
            <Icon as={ChevronLeftIcon} boxSize={5} />
            <div style={{ paddingLeft: '0.7rem' }}>Volver</div>
          </Button>
        </div>
        <div>
          <div className="ActivitiesTitle">{travelTitle}</div>
          <div className="ActivitiesDate">
            [{formatDate(travelStartDate)} - {formatDate(travelEndDate)}]
          </div>
        </div>
        <div className="sharedButton">
          <Button>
            <div style={{ paddingRight: '0.7rem' }}>Compartir</div>
            <Icon as={ExternalLinkIcon} boxSize={5} />
          </Button>
        </div>
      </div>
      <SimpleGrid
        className="activitiesGrid"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(250px, 1rem))"
      >
        {travelData}
        <CustomModal />
      </SimpleGrid>
      <div className="budgetButton">
        <Link to={`/budget/${travelId}`}>
          <Button colorScheme="yellow" size="lg" variant="outline">
            Presupuesto
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ActivitiesPage
