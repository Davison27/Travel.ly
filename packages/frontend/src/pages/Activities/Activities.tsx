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
import { Link, useParams } from 'react-router-dom'

import CustomModal from '../../components/custom-modal/custom-modal'
import api from '../../utils/api/api'
import { Travel } from '../../utils/interfaces/Travel'

function Activities() {
  const [travel, setTravel] = useState<Travel>()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id])

  const title = travel?.name
  const startDate = travel?.startDate
  const endDate = travel?.endDate

  console.log(travel)

  const travelData = travel?.activities.map((activity: any) => (
    <>
      <button>
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Img
              src={activity.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                {activity.category}
              </Heading>
              <Heading size="md" className="messageGrid">
                {activity.startHour} - {activity.endHour}
              </Heading>
              <Text>{activity.description}</Text>
            </Stack>
          </CardBody>
        </Card>
      </button>
    </>
  ))

  // const ActivitiesData = data.find(
  //   (travel) => travel.id === '7c26e870-caa7-48db-bffb-445d8fb3e577',
  // )!

  // const travelsData = ActivitiesData?.activities?.map((activity: any) => (
  //   <>
  //     <button>
  //       <Card maxW="sm" backgroundColor={'#DCDCDC'}>
  //         <CardBody>
  //           <Img
  //             src={activity.image}
  //             alt="Green double couch with wooden legs"
  //             borderRadius="lg"
  //           />
  //           <Stack mt="6" spacing="3">
  //             <Heading size="md" className="messageGrid">
  //               {activity.category}
  //             </Heading>
  //             <Heading size="md" className="messageGrid">
  //               {activity.startHour} - {activity.endHour}
  //             </Heading>
  //             <Text>{activity.description}</Text>
  //           </Stack>
  //         </CardBody>
  //       </Card>
  //     </button>
  //   </>
  // ))

  return (
    <div>
      <div className="titleButton">
        <div className="backButton">
          <Link to="/travels">
            <Button>
              <Icon as={ChevronLeftIcon} boxSize={5} />
              <div style={{ paddingLeft: '0.7rem' }}>Volver</div>
            </Button>
          </Link>
        </div>
        <div>
          <div className="ActivitiesTitle">{title}</div>
          <div className="ActivitiesDate">
            [{startDate} - {endDate}]
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
        <Link to="/budget">
          <Button colorScheme="yellow" size="lg" variant="outline">
            Presupuesto
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Activities
