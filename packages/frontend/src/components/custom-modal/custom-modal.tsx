import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

import AccomodationForm from '../../pages/ActivitiesForm/AccomodationForm/AccomodationForm'
import EntertainmentForm from '../../pages/ActivitiesForm/EntertainmentForm/EntertainmentForm'
import FoodForm from '../../pages/ActivitiesForm/FoodForm/FoodForm'
import TransportForm from '../../pages/ActivitiesForm/TransportForm/TransportForm'

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
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Elige el tipo de actividad</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AccomodationForm />
            <EntertainmentForm />
            <FoodForm />
            <TransportForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
