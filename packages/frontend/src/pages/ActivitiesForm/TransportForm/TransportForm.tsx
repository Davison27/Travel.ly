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
import { formatFormsDate } from 'packages/frontend/src/utils/functions/globalFunctions'
import { Travel } from 'packages/frontend/src/utils/interfaces/Travel'
import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

interface Values {
  category: string
  description: string
  documentsUrl: string
  endDate: any
  id: string
  location: string
  name: string
  price: number
  startDate: any
  transportType: string
}

function TransportForm(
  props?: Values & { onFinish?: () => void } & {
    setTravel: (travel: Travel) => void
    travel: Travel | undefined
  },
) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (props?.id) {
      onOpen()
    }
  }, [props?.id, onOpen])

  const initialRef = React.useRef(null)
  const initialValues: Values = {
    category: props?.category || 'Transport',
    description: props?.description || '',
    documentsUrl: props?.documentsUrl || '',
    endDate: formatFormsDate(props?.endDate) || new Date(),
    id: props?.id || uuid(),
    location: props?.location || '',
    name: props?.name || '',
    price: props?.price || 0,
    startDate: formatFormsDate(props?.startDate) || new Date(),
    transportType: props?.transportType || '',
  }

  const handleSubmit = useCallback(
    async (values: Values) => {
      try {
        if (props?.id) {
          await api.updateActivity(
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
        } else {
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
          props?.setTravel({
            ...props?.travel!,
            activities: [
              ...props?.travel!.activities,
              {
                activityId: values.id,
                category: values.category,
                description: values.description,
                documentsUrl: values.documentsUrl,
                endDate: values.endDate,
                id: values.id,
                imageUrl:
                  'https://fotografias.antena3.com/clipping/cmsimages01/2022/12/02/2E2B162A-7CAB-4EF6-AE09-1019C51E4E81/coche_98.jpg?crop=1066,600,x68,y0&width=1900&height=1069&optimize=low&format=webply',
                location: values.location,
                name: values.name,
                price: values.price,
                rooms: 0,
                startDate: values.startDate,
                transportType: values.transportType,
                travelId: id!,
              },
            ],
          })
        }
      } catch (error) {
        console.log(error)
      } finally {
        props?.onFinish?.()
      }
    },
    [id, props],
  )

  return (
    <>
      {' '}
      {!props?.id && (
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
      )}
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
                        <FormLabel htmlFor="startDate">Inicio</FormLabel>
                        <Field
                          id="startaDate"
                          name="startDate"
                          as={Input}
                          type="datetime-local"
                          variant="filled"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor="endDate">Fin</FormLabel>
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
