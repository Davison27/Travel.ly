/* eslint-disable react/jsx-no-bind */
import './custom-modal.scss'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

import AccomodationForm from '../../pages/ActivitiesForm/AccomodationForm/AccomodationForm'
import EntertainmentForm from '../../pages/ActivitiesForm/EntertainmentForm/EntertainmentForm'
import FoodForm from '../../pages/ActivitiesForm/FoodForm/FoodForm'
import TransportForm from '../../pages/ActivitiesForm/TransportForm/TransportForm'
import { Travel } from '../../utils/interfaces/Travel'
import Emoji from '../Emoji/emoji'

export default function CustomModal(props: {
  setTravel: (travel: Travel) => void
  travel: Travel | undefined
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const initialRef = React.useRef(null)

  return (
    <>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <CardBody>
          <Button
            height="100%"
            width="100%"
            colorScheme="white"
            onClick={onOpen}
          >
            <div className="emojiModalSize">
              <Emoji symbol="🧭" />
            </div>
          </Button>
        </CardBody>
        <CardFooter className="buttonGrid">
          <Stack mt="6" spacing="3">
            <Heading size="md" className="messageGrid">
              Añadir actividad
            </Heading>
          </Stack>
        </CardFooter>
      </Card>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent maxW="60rem">
          <ModalHeader>Elige el tipo de actividad</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="alignCards">
            <AccomodationForm
              id={''}
              category={''}
              description={''}
              documentUrls={''}
              endDate={new Date()}
              location={''}
              name={''}
              price={0}
              rooms={0}
              startDate={new Date()}
              travel={props.travel}
              setTravel={props.setTravel}
            />
            <EntertainmentForm
              id={''}
              category={''}
              description={''}
              documentUrls={''}
              endDate={new Date()}
              location={''}
              name={''}
              price={0}
              startDate={new Date()}
              travel={props.travel}
              setTravel={props.setTravel}
            />
            <FoodForm
              id={''}
              category={''}
              description={''}
              documentUrls={''}
              endDate={new Date()}
              location={''}
              name={''}
              price={0}
              startDate={new Date()}
              travel={props.travel}
              setTravel={props.setTravel}
            />
            <TransportForm
              id={''}
              category={''}
              description={''}
              documentUrls={''}
              endDate={new Date()}
              location={''}
              name={''}
              price={0}
              transportType={''}
              startDate={new Date()}
              travel={props.travel}
              setTravel={props.setTravel}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
