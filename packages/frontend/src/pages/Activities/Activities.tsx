import './Activities.scss'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CustomModal from '../../components/custom-modal/custom-modal'
import Emoji from '../../components/Emoji/emoji'
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
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Link to="/new-travel">
              <Button height="100%" width="100%" colorScheme="white">
                <div className="emojiSize">
                  <Emoji symbol="🧭" />
                </div>
              </Button>
            </Link>
          </CardBody>
          <CardFooter className="buttonGrid">
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Add new activity
              </Heading>
            </Stack>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <CustomModal />
    </div>
  )
}

export default Activities
