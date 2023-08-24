/* eslint-disable react/jsx-no-bind */
import { DeleteIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

import api from '../../utils/api/api'

function CustomAlertDialog(props: {
  activityId?: string
  onDelete?: () => void
  travelId: string
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const cancelRef = React.useRef(null)

  const deleteButton = () => {
    if (props.activityId) {
      return (
        <Button colorScheme="red" variant="outline" onClick={onOpen}>
          <DeleteIcon />
        </Button>
      )
    }
    if (!props.activityId) {
      return (
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          onClick={onOpen}
        >
          Borrar
        </Button>
      )
    }
  }

  const deleteTravel = () => {
    if (props.activityId) {
      api.deleteActivity(props.activityId, props.travelId)
    } else {
      api.deleteTravel(props.travelId)
    }
    props.onDelete!()
    onClose()
  }

  return (
    <>
      {deleteButton()}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Borrar viaje
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro? No podrás deshacer esta acción después.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancelar</Button>
              <Button colorScheme="red" onClick={deleteTravel} ml={1}>
                Borrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default CustomAlertDialog
