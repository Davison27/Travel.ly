/* eslint-disable react/jsx-no-bind */
import './view-activity-modal.scss'

import { ViewIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
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
    (activity) => activity.activityId === props.activityId,
  )

  const activityInfo = (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Card>
            <CardHeader>
              <Heading size="lg">{travelData?.category}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Nombre
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.name}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Descripción
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.description}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Fecha de inicio
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {formatDate(travelData?.startDate)}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Fecha de fin
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {formatDate(travelData?.endDate)}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Precio
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.price}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Localización
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.location}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Habitaciones
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.rooms}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Tipo de transporte
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.transportType}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Documentos
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {travelData?.documentsUrl}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
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
