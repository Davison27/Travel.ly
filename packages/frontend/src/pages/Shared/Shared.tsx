import {
  Card,
  CardBody,
  ChakraProvider,
  Heading,
  Img,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../utils/api/api'
import { formatDate, formatHour } from '../../utils/functions/globalFunctions'
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

  const travelData = travel?.activities.map(
    ({ activityId, category, endDate, imageUrl, startDate }) => (
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
              {formatHour(startDate)} - {formatHour(endDate)}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    ),
  )

  return (
    <ChakraProvider>
      <div>
        <div className="titleButton">
          <div>
            <div className="ActivitiesTitle">{travelTitle}</div>
            <div className="ActivitiesDate">
              [{formatDate(travelStartDate)} - {formatDate(travelEndDate)}]
            </div>
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
