/* eslint-disable react/jsx-no-bind */
import './view-activity-modal.scss'

import { ViewIcon } from '@chakra-ui/icons'
import {
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../utils/api/api'
import { formatDate } from '../../utils/functions/globalFunctions'
import { Travel } from '../../utils/interfaces/Travel'

export default function ViewActivityModal(props: any) {
  const [travel, setTravel] = useState<Travel>()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setTravel(response))
  }, [id])

  const travelData = travel?.activities.find(
    (activity) => activity.id === props.activityId,
  )

  const activityInfo = (
    <>
      <ModalOverlay />
      <ModalContent maxW="60rem">
        <ModalHeader>{travelData?.category}</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="alignCards">
          <UnorderedList>
            <ListItem>Name: {travelData?.name}</ListItem>
            <ListItem>Description: {travelData?.description}</ListItem>
            <ListItem>Start date: {formatDate(travelData?.startDate)}</ListItem>
            <ListItem>End date: {formatDate(travelData?.endDate)}</ListItem>
            <ListItem>Price: {travelData?.price}</ListItem>
            <ListItem>Location: {travelData?.location}</ListItem>
            <ListItem>Rooms: {travelData?.rooms}</ListItem>
            <ListItem>Transport type: {travelData?.transportType}</ListItem>
            <ListItem>Documents: {travelData?.documentsUrl}</ListItem>
          </UnorderedList>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </>
  )

  const initialRef = React.useRef(null)

  return (
    <>
      <Button variant="outline" colorScheme="blue" onClick={onOpen}>
        <ViewIcon />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
      >
        {activityInfo}
      </Modal>
    </>
  )
}
