/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-shadow */
import './FoodForm.scss'

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
import { useNavigate, useParams } from 'react-router-dom'
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

function FoodForm() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const initialRef = React.useRef(null)
  const initialValues: Values = {
    category: 'Food',
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
          'https://fotografias.larazon.es/clipping/cmsimages02/2022/04/01/BE78C788-5591-428B-A83A-FF2CDAF27C65/98.jpg?crop=4200,2363,x0,y218&width=1900&height=1069&optimize=low&format=webply',
          id!,
          values.description,
          values.documentsUrl,
          values.location,
          values.price,
          0,
          '',
        )
        navigate(`/travel/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    [id, navigate],
  )

  return (
    <>
      {' '}
      <button onClick={onOpen} style={{ paddingTop: '1rem' }}>
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Img
              src={
                'https://fotografias.larazon.es/clipping/cmsimages02/2022/04/01/BE78C788-5591-428B-A83A-FF2CDAF27C65/98.jpg?crop=4200,2363,x0,y218&width=1900&height=1069&optimize=low&format=webply'
              }
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Comida
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
            <div className="travelsTitle">Comida</div>
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

export default FoodForm
