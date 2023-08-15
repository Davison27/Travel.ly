import './Shared.scss'

import {
  Card,
  CardBody,
  ChakraProvider,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import api from '../../utils/api/api'
import {
  formatDate,
  formatDateAndHour,
} from '../../utils/functions/globalFunctions'
import { Travel } from '../../utils/interfaces/Travel'

export default function SharedPage() {
  const [travel, setTravel] = useState<Travel>()

  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id])

  const travelTitle = travel?.name
  const travelStartDate = travel?.startDate
  const travelEndDate = travel?.endDate

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
    .map(
      ({ activityId, category, description, endDate, imageUrl, startDate }) => (
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
            <Stack mt="6" spacing="3">
              <Text>{description}</Text>
            </Stack>
          </CardBody>
        </Card>
      ),
    )

  return (
    <ChakraProvider>
      <div>
        <div className="titleButton">
          <div id="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div>
            <div className="ActivitiesTitle">{travelTitle}</div>
          </div>
          <div className="ActivitiesDateShared">
            [{formatDate(travelStartDate)} - {formatDate(travelEndDate)}]
          </div>
        </div>
        <SimpleGrid
          className="activitiesGrid"
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(250px, 1rem))"
        >
          {travelData}
        </SimpleGrid>
      </div>
    </ChakraProvider>
  )
}
