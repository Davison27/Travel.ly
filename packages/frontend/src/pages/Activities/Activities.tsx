import './Activities.scss'

import { Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import CustomModal from '../../components/custom-modal/custom-modal'
import api from '../../utils/api/api'

function Activities() {
  const [travels, setTravels] = useState([])
  useEffect(() => {
    api.getTravels().then((result) => setTravels(result.travels))
  }, [])
  const travelsData = travels.map((travel: any) => (
    <>
      <button>
        <Image
          src={travel.image}
          alt="Green double couch with wooden legs"
          borderRadius="xl"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="messageGrid">
            {travel.message}
          </Heading>
          <Heading size="md" className="messageGrid">
            {travel.startDate} - {travel.endDate}
          </Heading>
        </Stack>
      </button>
      <div>-----</div>
    </>
  ))
  return (
    <div>
      <SimpleGrid
        className="activitiesGrid"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1rem))"
      >
        {travelsData}
        <CustomModal />
      </SimpleGrid>
    </div>
  )
}

export default Activities
