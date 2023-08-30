/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-shadow */
import './AccomodationForm.scss'

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
  documentUrls: string
  endDate: any
  id: string
  location: string
  name: string
  price: number
  rooms: number
  startDate: any
}

function AccomodationForm(
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
    category: props?.category || 'Accomodation',
    description: props?.description || '',
    documentUrls: props?.documentUrls || '',
    endDate: formatFormsDate(props?.endDate) || new Date(),
    id: props?.id || uuid(),
    location: props?.location || '',
    name: props?.name || '',
    price: props?.price || 0,
    rooms: props?.rooms || 1,
    startDate: formatFormsDate(props?.startDate) || new Date(),
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
            'https://www.cuboshomes.com/blog/wp-content/uploads/2022/06/5-razones-para-convertir-tu-propiedad-en-un-alojamiento-turistico-1280x720.jpg',
            id!,
            values.description,
            values.documentUrls,
            values.location,
            values.price,
            values.rooms,
            '-',
          )
        } else {
          await api.postActivity(
            values.id,
            values.category,
            values.endDate,
            values.name,
            values.startDate,
            'https://www.cuboshomes.com/blog/wp-content/uploads/2022/06/5-razones-para-convertir-tu-propiedad-en-un-alojamiento-turistico-1280x720.jpg',
            id!,
            values.description,
            values.documentUrls,
            values.location,
            values.price,
            values.rooms,
            '-',
          )
          props?.setTravel({
            ...props?.travel!,
            activities: [
              ...props?.travel!.activities,
              {
                activityId: values.id,
                category: values.category,
                description: values.description,
                documentUrls: values.documentUrls,
                endDate: values.endDate,
                id: values.id,
                imageUrl:
                  'https://www.cuboshomes.com/blog/wp-content/uploads/2022/06/5-razones-para-convertir-tu-propiedad-en-un-alojamiento-turistico-1280x720.jpg',
                location: values.location,
                name: values.name,
                price: values.price,
                rooms: values.rooms,
                startDate: values.startDate,
                transportType: '-',
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
        <button onClick={onOpen}>
          <Card maxW="sm" backgroundColor={'#DCDCDC'}>
            <CardBody>
              <Img
                src={
                  'https://www.cuboshomes.com/blog/wp-content/uploads/2022/06/5-razones-para-convertir-tu-propiedad-en-un-alojamiento-turistico-1280x720.jpg'
                }
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" className="messageGrid">
                  Alojamiento
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
            <div className="travelsTitle">Alojamiento</div>
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
                        <FormLabel htmlFor="startDate">Inicio</FormLabel>
                        <Field
                          id="startDate"
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
                      <FormControl isRequired>
                        <FormLabel htmlFor="rooms">Habitaciones</FormLabel>
                        <Field
                          id="rooms"
                          name="rooms"
                          as={Input}
                          variant="filled"
                        ></Field>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="price">Gasto</FormLabel>
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
                        <FormLabel htmlFor="documentUrls">Documentos</FormLabel>
                        <Field
                          id="documentUrls"
                          name="documentUrls"
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

export default AccomodationForm
