/* eslint-disable no-shadow */
import './TransportForm.scss'

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
  checkIn: string
  checkOut: string
  description: string
  expenses: number
  id: string
  name: string
  rooms: number
  ubication: string
}

function TransportForm() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const initialRef = React.useRef(null)
  const initialValues: Values = {
    checkIn: '',
    checkOut: '',
    description: '',
    expenses: 0,
    id: '',
    name: '',
    rooms: 1,
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
      <Button onClick={onOpen}>Transport</Button>
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
            <div className="travelsTitle">Selecciona el transporte</div>
            <Box bg="white" p={6} h={800} rounded="md">
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl isRequired>
                        <FormLabel htmlFor="name">Accomodation name</FormLabel>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          as={Input}
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Field
                          id="description"
                          name="description"
                          as={Input}
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="ubication">Ubication</FormLabel>
                        <Field
                          id="ubication"
                          name="ubication"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl></FormControl>
                      <FormControl>
                        <FormLabel htmlFor="checkIn">Check-in hour</FormLabel>
                        <Field
                          id="checkIn"
                          name="checkIn"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="checkOut">Check-out hour</FormLabel>
                        <Field
                          id="checkOut"
                          name="checkOut"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="rooms">Rooms</FormLabel>
                        <Field
                          id="travelers"
                          name="travelers"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="expense">Expense</FormLabel>
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
                      <Button
                        type="submit"
                        onClick={onClose}
                        colorScheme="blue"
                        width="full"
                      >
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

export default TransportForm
