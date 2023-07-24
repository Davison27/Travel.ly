/* eslint-disable no-shadow */
import './TravelsForms.scss'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import api from '../../utils/api/api'

interface Values {
  budget: number
  description: string
  endDate: string
  id: string
  imageUrl: string
  name: string
  shared: boolean
  startDate: string
  travelers: number
}

function TravelsForm(props?: Values & { onFinish?: () => void }) {
  const navigate = useNavigate()
  const initialValues: Values = {
    budget: props?.budget || 0,
    description: props?.description || '',
    endDate: props?.endDate || '',
    id: props?.id || uuid(),
    imageUrl: props?.imageUrl || '',
    name: props?.name || '',
    shared: props?.shared || false,
    startDate: props?.startDate || '',
    travelers: props?.travelers || 0,
  }

  const handleSubmit = useCallback(
    async (values: Values) => {
      try {
        if (props?.id) {
          await api.updateTravel(
            values.description,
            [],
            values.endDate,
            {
              accomodatePrice: 0,
              budget: values.budget,
              entertainmentPrice: 0,
              foodPrice: 0,
              transportPrice: 0,
            },
            values.id,
            values.name,
            values.shared,
            values.startDate,
            values.travelers,
            values.imageUrl,
          )
          console.log(values)
        } else {
          await api.postTravel(
            values.description,
            values.endDate,
            values.budget,
            values.id,
            values.name,
            values.shared,
            values.startDate,
            values.travelers,
            values.imageUrl,
          )
        }
        navigate('/')
      } catch (error) {
        console.log(error)
      } finally {
        props?.onFinish?.()
      }
    },
    [navigate, props],
  )

  return (
    <>
      <div className="travelsTitle">Nuevo Viaje</div>
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
                  <FormLabel htmlFor="startDate">Inicio</FormLabel>
                  <Field
                    id="startDate"
                    name="startDate"
                    as={Input}
                    type="datetime-local"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
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
                  <FormLabel htmlFor="travelers">Viajeros</FormLabel>
                  <Field
                    id="travelers"
                    name="travelers"
                    as={Input}
                    variant="filled"
                  ></Field>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="budget">Presupuesto</FormLabel>
                  <InputGroup>
                    <Field
                      id="budget"
                      name="budget"
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
                  <FormLabel htmlFor="imageUrl">Imagen</FormLabel>
                  <Field
                    id="imageUrl"
                    name="imageUrl"
                    as={Input}
                    variant="filled"
                  ></Field>
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full">
                  Guardar viaje
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </>
  )
}

export default TravelsForm
