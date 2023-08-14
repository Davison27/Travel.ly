/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-bind */
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
import { TokenPayload } from 'google-auth-library'
import jwt_decode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CustomAlertDialog from '../../components/custom-alert-dialog/custom-alert-dialog'
import Emoji from '../../components/Emoji/emoji'
import api from '../../utils/api/api'
import { formatDate } from '../../utils/functions/globalFunctions'
import { storage } from '../../utils/functions/storage'
import { Travels } from '../../utils/interfaces/Travels'
import TravelsForm from '../TravelsForm/TravelsForms'

export default function TravelsView() {
  const [travels, setTravels] = useState<Travels[]>([])
  const [travelToModify, settravelToModify] = useState(null)
  const ownerId: TokenPayload = jwt_decode(storage.get('token'))

  useEffect(() => {
    api.getTravels(ownerId.sub!).then((result) => setTravels(result.travels))
  }, [travelToModify, ownerId.sub])

  const travelsData = travels.map((travel: Travels) => (
    <Card key={travel.id} maxW="sm" backgroundColor={'#DCDCDC'}>
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
            {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
          </Heading>
          <Text>{travel.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter className="buttonGrid">
        <ButtonGroup spacing="3">
          <Link to={`/travel/${travel.id}`}>
            <Button
              leftIcon={<ViewIcon />}
              variant="outline"
              colorScheme="blue"
            >
              Ver
            </Button>
          </Link>
          <Button
            leftIcon={<EditIcon />}
            variant="outline"
            colorScheme="green"
            onClick={() => settravelToModify(travel.id)}
          >
            Modificar
          </Button>
          <CustomAlertDialog
            travelId={travel.id}
            onDelete={() => {
              setTravels(
                travels.filter((travelId) => travelId.id !== travel.id),
              )
            }}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))

  if (travelToModify) {
    const travel = travels.find((travelId) => travelId.id === travelToModify)!
    return (
      <TravelsForm
        description={travel.description}
        endDate={travel.endDate}
        budget={travel.budget}
        id={travel.id}
        imageUrl={travel.imageUrl}
        name={travel.name}
        shared={travel.shared}
        startDate={travel.startDate}
        travelers={travel.travelers}
        onFinish={() => settravelToModify(null)}
      />
    )
  }

  return (
    <>
      <div className="travelsTitle">Tus Viajes</div>
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
                  Añadir un nuevo viaje
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
