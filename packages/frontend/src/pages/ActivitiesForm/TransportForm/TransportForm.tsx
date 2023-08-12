/* eslint-disable no-shadow */
import './TransportForm.scss'

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

// import api from '../../../utils/api/api'

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
  transportType: string
}

function TransportForm() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { id } = useParams<{ id: string }>()
  const initialRef = React.useRef(null)
  const initialValues: Values = {
    category: 'Transport',
    description: '',
    documentsUrl: '',
    endDate: new Date(),
    id: uuid(),
    location: '',
    name: '',
    price: 0,
    startDate: new Date(),
    transportType: '',
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
          'https://fotografias.antena3.com/clipping/cmsimages01/2022/12/02/2E2B162A-7CAB-4EF6-AE09-1019C51E4E81/coche_98.jpg?crop=1066,600,x68,y0&width=1900&height=1069&optimize=low&format=webply',
          id!,
          values.description,
          values.documentsUrl,
          values.location,
          values.price,
          0,
          values.transportType,
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
      <button onClick={onOpen} style={{ paddingTop: '1rem' }}>
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Img
              src={
                'https://fotografias.antena3.com/clipping/cmsimages01/2022/12/02/2E2B162A-7CAB-4EF6-AE09-1019C51E4E81/coche_98.jpg?crop=1066,600,x68,y0&width=1900&height=1069&optimize=low&format=webply'
              }
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Transporte
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
            <div className="travelsTitle">Transporte</div>
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
                      <FormControl isRequired>
                        <FormLabel htmlFor="transportType">
                          Medio de Transporte
                        </FormLabel>
                        <Field
                          id="transportType"
                          name="transportType"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor="startDate">Llegada</FormLabel>
                        <Field
                          id="startaDate"
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
                        onClick={onClose}
                        colorScheme="blue"
                        width="full"
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

export default TransportForm
