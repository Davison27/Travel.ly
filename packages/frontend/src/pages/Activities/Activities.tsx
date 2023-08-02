/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Activities.scss'

import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Button,
  Card,
  CardBody,
  Heading,
  Icon,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import CustomAlertDialog from '../../components/custom-alert-dialog/custom-alert-dialog'
import CustomModal from '../../components/custom-modal/custom-modal'
import api from '../../utils/api/api'
import { formatDate, formatHour } from '../../utils/functions/globalFunctions'
import { Activities } from '../../utils/interfaces/Activities'
import { Travel } from '../../utils/interfaces/Travel'

function ActivitiesPage() {
  const [travel, setTravel] = useState<Travel>()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id])
  const navigate = useNavigate()

  const title = travel?.name
  const startDate = travel?.startDate
  const endDate = travel?.endDate
  const travelId = travel?.id

  const travelData = travel?.activities.map((activity: Activities) => (
    <>
      <button>
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Img
              src={activity.imageUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                {activity.category}
              </Heading>
              <Heading size="md" className="messageGrid">
                {formatHour(activity.startDate)} -{' '}
                {formatHour(activity.endDate)}
              </Heading>
              <Text>{activity.description}</Text>
              <CustomAlertDialog
                activityId={activity.activityId}
                travelId={activity.travelId}
              />
            </Stack>
          </CardBody>
        </Card>
      </button>
    </>
  ))

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
          <div className="ActivitiesTitle">{title}</div>
          <div className="ActivitiesDate">
            [{formatDate(startDate)} - {formatDate(endDate)}]
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
