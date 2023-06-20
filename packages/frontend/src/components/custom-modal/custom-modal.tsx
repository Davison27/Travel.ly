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

export default function CustomModal(props: any) {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const initialRef = React.useRef(null)

  const activitiesData = props.activities.map((activity: any) => (
    <div>
      <h1>{activity.name}</h1>
      <h1>{activity.description}</h1>
      <h1>{activity.startDate}</h1>
      <h1>{activity.endDate}</h1>
      <h1>{activity.expenses}</h1>
      <h1>{activity.travelers}</h1>
      <h1>{activity.shared}</h1>
    </div>
  ))

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody pb={6}>{activitiesData}</ModalBody> */}

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
