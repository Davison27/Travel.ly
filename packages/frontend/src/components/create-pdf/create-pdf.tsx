import {
  Card,
  CardBody,
  Heading,
  Img,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { Document, Page, Text, View } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../utils/api/api'
import { formatDate, formatHour } from '../../utils/functions/globalFunctions'
import { Activities } from '../../utils/interfaces/Activities'
import { Travel } from '../../utils/interfaces/Travel'

const CreatePdf = () => {
  const [travel, setTravel] = useState<Travel | undefined>()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id])

  const travelData = travel?.activities.map(
    ({ activityId, category, endDate, imageUrl, startDate }: Activities) => (
      <Card key={activityId} maxW="sm" backgroundColor="#DCDCDC">
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
    <Document>
      <Page size="A4">
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              display: 'flex',
              fontFamily: 'lobster, cursive',
              fontSize: '3rem',
              height: 'auto',
              justifyContent: 'center',
              paddingTop: '1rem',
            }}
          >
            {travel?.name}
          </Text>
          <Text
            style={{
              display: 'flex',
              fontFamily: 'lobster, cursive',
              fontSize: '1.75rem',
              height: 'auto',
              justifyContent: 'center',
              paddingBottom: '1rem',
              paddingTop: '0.5rem',
            }}
          >
            [{formatDate(travel?.startDate)} - {formatDate(travel?.endDate)}]
          </Text>
        </View>
        <View>
          <SimpleGrid
            style={{ justifyContent: 'center', paddingTop: '3rem' }}
            spacing={6}
            templateColumns="repeat(auto-fill, minmax(250px, 1rem))"
          >
            {travelData}
          </SimpleGrid>
        </View>
      </Page>
    </Document>
  )
}

export default CreatePdf
