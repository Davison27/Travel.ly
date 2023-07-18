import './Activities.scss'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons'
import {
  Box,
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
import { Link } from 'react-router-dom'

import CustomModal from '../../components/custom-modal/custom-modal'
import { data } from '../../Data/Static-Data'
import { Travel } from '../../utils/interfaces/Travel'

function Activities() {
  // useEffect(() => {
  //   api.getTravels().then((result) => setTravels(result.travels))
  // }, [])
  // const travelsData = travels.map((travel: any) => (
  //   <>
  //     <button>
  //       <Image
  //         src={travel.image}
  //         alt="Green double couch with wooden legs"
  //         borderRadius="xl"
  //       />
  //       <Stack mt="6" spacing="3">
  //         <Heading size="md" className="messageGrid">
  //           {travel.message}
  //         </Heading>
  //         <Heading size="md" className="messageGrid">
  //           {travel.startDate} - {travel.endDate}
  //         </Heading>
  //       </Stack>
  //     </button>
  //     <div>-----</div>
  //   </>
  // )

  const ActivitiesData = data.find(
    (travel) => travel.id === '7c26e870-caa7-48db-bffb-445d8fb3e577',
  )!

  const title = ActivitiesData?.name
  const startDate = ActivitiesData?.startDate
  const endDate = ActivitiesData?.endDate

  const travelsData = ActivitiesData?.activities?.map((activity: any) => (
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
      <div className="dateButtons">
        <div className="alignItems">
          <Button>
            <Icon as={ChevronLeftIcon} boxSize={5} />
          </Button>
          <Box color="black" p={2}>
            {startDate}
          </Box>
          <Button>
            <Icon as={ChevronRightIcon} boxSize={5} />
          </Button>
        </div>
      </div>
      <SimpleGrid
        className="activitiesGrid"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(250px, 1rem))"
      >
        {travelsData}
        <CustomModal />
      </SimpleGrid>
      <div className="budgetButton">
        <Button colorScheme="yellow" size="lg" variant="outline">
          Presupuesto
        </Button>
      </div>
    </div>
  )
}

export default Activities
