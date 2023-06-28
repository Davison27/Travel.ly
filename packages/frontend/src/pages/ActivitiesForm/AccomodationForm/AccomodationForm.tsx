/* eslint-disable no-shadow */
import './AccomodationForm.scss'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import React, { useCallback } from 'react'

// import api from '../../../utils/api/api'

interface Values {
  category: string
  checkIn: string
  checkOut: string
  description: string
  documentsUrl: string
  expenses: number
  id: string
  name: string
  rooms: number
  ubication: string
}

function AccomodationForm() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const initialRef = React.useRef(null)
  const initialValues: Values = {
    category: 'Accomodation',
    checkIn: '',
    checkOut: '',
    description: '',
    documentsUrl: '',
    expenses: 0,
    id: '',
    name: '',
    rooms: 0,
    ubication: '',
  }

  const handleSubmit = useCallback(async (values: Values) => {
    console.log(values)
    try {
      // await api.postTravel(
      //   values.description,
      //   values.checkOut,
      //   values.expenses,
      //   values.id,
      //   values.name,
      //   values.ubication,
      //   values.checkIn,
      //   values.rooms,
      // )
      console.log('Travel created')
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      {' '}
      <Button onClick={onOpen}>Accomodation</Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'full'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="travelsTitle">Selecciona el hospedaje</div>
            <Box bg="white" p={6} h={800} rounded="md">
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl isRequired>
                        <FormLabel htmlFor="name">Nombre</FormLabel>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          as={Input}
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="description">Descripción</FormLabel>
                        <Field
                          id="description"
                          name="description"
                          as={Input}
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="ubication">Ubicación</FormLabel>
                        <Field
                          id="ubication"
                          name="ubication"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl></FormControl>
                      <FormControl>
                        <FormLabel htmlFor="checkIn">
                          Hora de Check-in
                        </FormLabel>
                        <Field
                          id="checkIn"
                          name="checkIn"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="checkOut">
                          Hora de Check-out
                        </FormLabel>
                        <Field
                          id="checkOut"
                          name="checkOut"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="rooms">Habitaciones</FormLabel>
                        <Field
                          id="travelers"
                          name="travelers"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="expense">Gasto</FormLabel>
                        <InputGroup>
                          <Field
                            id="expense"
                            name="expense"
                            as={Input}
                            variant="filled"
                          />
                          <InputRightElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="€"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="documentsURL">Documentos</FormLabel>
                        <Field
                          id="documentsURL"
                          name="documentsURL"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <Button type="submit" colorScheme="blue" width="full">
                        Submit
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AccomodationForm
