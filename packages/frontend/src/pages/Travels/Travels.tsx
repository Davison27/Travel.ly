import './Travels.scss'

import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CustomAlertDialog from '../../components/custom-alert-dialog/custom-alert-dialog'
import Emoji from '../../components/Emoji/emoji'
import api from '../../utils/api/api'

export default function Travels() {
  const [travels, setTravels] = useState([])
  useEffect(() => {
    api.getTravels().then((result) => setTravels(result.travels))
  }, [])

  const travelsData = travels.map((travel: any) => (
    <Card maxW="sm" backgroundColor={'#DCDCDC'}>
      <CardBody>
        <Img
          src={travel.imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="messageGrid">
            {travel.name}
          </Heading>
          <Heading size="sm" className="messageGrid">
            {travel.startDate} - {travel.endDate}
          </Heading>
          <Text>{travel.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter className="buttonGrid">
        <ButtonGroup spacing="3">
          <Button leftIcon={<ViewIcon />} variant="outline" colorScheme="blue">
            View
          </Button>
          <Link to="/new-travel">
            <Button
              leftIcon={<EditIcon />}
              variant="outline"
              colorScheme="green"
            >
              Modify
            </Button>
          </Link>
          <CustomAlertDialog id={travel.id} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))

  return (
    <>
      <div className="travelsTitle">Your Travels</div>
      <div>
        <SimpleGrid
          className="travelsGrid"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 1rem))"
        >
          <Card maxW="sm" backgroundColor={'#DCDCDC'}>
            <CardBody>
              <Link to="/new-travel">
                <Button height="100%" width="100%" colorScheme="white">
                  <div className="emojiSize">
                    <Emoji symbol="🛫" />
                  </div>
                </Button>
              </Link>
            </CardBody>
            <CardFooter className="buttonGrid">
              <Stack mt="6" spacing="3">
                <Heading size="md" className="messageGrid">
                  Add new travel
                </Heading>
              </Stack>
            </CardFooter>
          </Card>
          {travelsData}
        </SimpleGrid>
      </div>
    </>
  )
}
