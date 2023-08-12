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
import api from 'packages/frontend/src/utils/api/api'
import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

interface Values {
  category: string
  description: string
  documentsUrl: string
  endDate: Date
  id: string
  location: string
  name: string
  price: number
  startDate: Date
}
function EntertainmentForm() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { id } = useParams<{ id: string }>()
  const initialRef = React.useRef(null)
  const initialValues: Values = {
    category: 'Entertainment',
    description: '',
    documentsUrl: '',
    endDate: new Date(),
    id: uuid(),
    location: '',
    name: '',
    price: 0,
    startDate: new Date(),
  }

  const handleSubmit = useCallback(
    async (values: Values) => {
      console.log(values)
      try {
        await api.postActivity(
          values.id,
          values.category,
          values.endDate,
          values.name,
          values.startDate,
          'https://roams.es/images/post/es_ES_telco/companias-telefonicas-movistar-guias-television-fusion-ocio-movistar.jpg',
          id!,
          values.description,
          values.documentsUrl,
          values.location,
          values.price,
          0,
          '',
        )
      } catch (error) {
        console.log(error)
      }
    },
    [id],
  )

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
                        <FormLabel htmlFor="location">Ubicación</FormLabel>
                        <Field
                          id="location"
                          name="location"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor="startDate">Llegada</FormLabel>
                        <Field
                          id="startDate"
                          name="startDate"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor="endDate">Salida</FormLabel>
                        <Field
                          id="endDate"
                          name="endDate"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="price">Gastos</FormLabel>
                        <InputGroup>
                          <Field
                            id="price"
                            name="price"
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
                      <Button
                        type="submit"
                        colorScheme="blue"
                        width="full"
                        onClick={onClose}
                      >
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
