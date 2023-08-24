/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Activities.scss'

import { ChevronLeftIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Icon,
  Img,
  Link as ChakraLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import CustomAlertDialog from '../../components/custom-alert-dialog/custom-alert-dialog'
import CustomModal from '../../components/custom-modal/custom-modal'
import ViewActivityModal from '../../components/view-activity-modal/view-activity-modal'
import api from '../../utils/api/api'
import {
  formatDate,
  formatDateAndHour,
} from '../../utils/functions/globalFunctions'
import { Activity } from '../../utils/interfaces/Activity'
import { Travel } from '../../utils/interfaces/Travel'

function ActivitiesPage() {
  const [travel, setTravel] = useState<Travel>()
  const [activities, setActivities] = useState<Activity[]>([])
  const [activityToModify, setActivityToModify] = useState('')

  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id, activityToModify])

  console.log(travel)
  const navigate = useNavigate()

  const travelTitle = travel?.name
  const travelStartDate = travel?.startDate
  const travelEndDate = travel?.endDate
  const travelId = travel?.id
  const travelSharedLink = `http://localhost:4200/travel/shared/${travelId}`

  const travelData = travel?.activities
    .sort((a, b) => {
      if (a.startDate > b.startDate) {
        return 1
      }
      if (a.startDate < b.startDate) {
        return -1
      }
      return 0
    })
    .map(({ activityId, category, endDate, imageUrl, startDate }: Activity) => (
      <Card maxW="sm" backgroundColor={'#DCDCDC'} key={activityId}>
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
              {formatDateAndHour(startDate)} - {formatDateAndHour(endDate)}
            </Heading>
          </Stack>
        </CardBody>
        <ButtonGroup spacing="3" className="buttonGrid">
          <ViewActivityModal activityId={activityId} />
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
              setTravel({
                ...travel,
                activities: travel.activities.filter(
                  (acti) => acti.activityId !== activityId,
                ),
              })
            }}
          />
        </ButtonGroup>
      </Card>
    ))

  // if (activityToModify) {
  //   const activity = travel?.activities.find(
  //     (acti) => acti.activityId === activityToModify,
  //   )
  //   return (
  //     <FoodForm
  //     // activity={activity!}
  //     // setActivityToModify={setActivityToModify}
  //     />
  //   )
  // }

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
          <Popover placement="left-start">
            <PopoverTrigger>
              <Button>
                <div style={{ paddingRight: '0.7rem' }}>Compartir</div>
                <Icon as={ExternalLinkIcon} boxSize={5} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <div>Aquí tienes el enlace para compartir tu viaje 😄</div>
                <br></br>
                <ChakraLink href={travelSharedLink} isExternal color="blue.500">
                  {travelSharedLink}
                </ChakraLink>
              </PopoverBody>
            </PopoverContent>
          </Popover>
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
