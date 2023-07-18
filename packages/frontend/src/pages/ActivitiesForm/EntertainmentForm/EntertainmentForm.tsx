/* eslint-disable no-shadow */
import './EntertainmentForm.scss'

import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
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
  ubication: string
}
function EntertainmentForm() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const initialRef = React.useRef(null)
  const initialValues: Values = {
    category: 'Entertainment',
    checkIn: '',
    checkOut: '',
    description: '',
    documentsUrl: '',
    expenses: 0,
    id: '',
    name: '',
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
      <button onClick={onOpen}>
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Img
              src={
                'https://roams.es/images/post/es_ES_telco/companias-telefonicas-movistar-guias-television-fusion-ocio-movistar.jpg'
              }
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Ocio
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="travelsTitle">Ocio</div>
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
                      <FormControl isRequired>
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
                      <FormControl isRequired>
                        <FormLabel htmlFor="checkIn">Llegada</FormLabel>
                        <Field
                          id="checkIn"
                          name="checkIn"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor="checkOut">Salida</FormLabel>
                        <Field
                          id="checkOut"
                          name="checkOut"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="expense">Gastos</FormLabel>
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
                        <FormLabel htmlFor="documentsUrl">Documentos</FormLabel>
                        <Field
                          id="documentsUrl"
                          name="documentsUrl"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <Button type="submit" colorScheme="blue" width="full">
                        Guardar
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

export default EntertainmentForm
