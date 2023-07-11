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
import Emoji from '../Emoji/emoji'

export default function CustomModal() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const initialRef = React.useRef(null)

  // const activitiesData = props.activities.map((activity: any) => (
  //   <div>
  //     <h1>{activity.name}</h1>
  //     <h1>{activity.description}</h1>
  //     <h1>{activity.startDate}</h1>
  //     <h1>{activity.endDate}</h1>
  //     <h1>{activity.expenses}</h1>
  //     <h1>{activity.travelers}</h1>
  //     <h1>{activity.shared}</h1>
  //   </div>
  // ))

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
            <AccomodationForm />
            <EntertainmentForm />
            <FoodForm />
            <TransportForm />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
