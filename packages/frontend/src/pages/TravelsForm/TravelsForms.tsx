/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-shadow */
import './TravelsForms.scss'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import { TokenPayload } from 'google-auth-library'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import api from '../../utils/api/api'
import { travelFormValidation } from '../../utils/functions/formsValidations'
import { formatFormsDate } from '../../utils/functions/globalFunctions'
import { storage } from '../../utils/functions/storage'

interface Values {
  budget: number
  description: string
  endDate: any
  id: string
  imageUrl: string
  name: string
  shared: boolean
  startDate: any
  travelers: number
}

function TravelsForm(props?: Values & { onFinish?: () => void }) {
  const ownerId: TokenPayload = jwt_decode(storage.get('token'))
  const navigate = useNavigate()
  const initialValues: Values = {
    budget: props?.budget || 0,
    description: props?.description || '',
    endDate: formatFormsDate(props?.endDate)! || formatFormsDate(new Date()),
    id: props?.id || uuid(),
    imageUrl: props?.imageUrl || '',
    name: props?.name || '',
    shared: props?.shared || false,
    startDate: formatFormsDate(props?.startDate) || formatFormsDate(new Date()),
    travelers: props?.travelers || 1,
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
              accomodationPrice: 0,
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
            ownerId.sub!,
          )
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
            ownerId.sub!,
          )
        }
        navigate('/travels')
      } catch (error) {
        console.log(error)
      } finally {
        props?.onFinish?.()
      }
    },
    [navigate, props, ownerId.sub],
  )

  return (
    <>
      <div className="backButton2">
        <Button onClick={() => navigate('/travels')}>
          <Icon as={ChevronLeftIcon} boxSize={5} />
          <div style={{ paddingLeft: '0.7rem' }}>Volver</div>
        </Button>
      </div>
      <div className="newTravelsTitle">Nuevo Viaje</div>
      <Box bg="white" p={6} h={800} rounded="md">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={travelFormValidation}
        >
          {({ errors, handleSubmit, setFieldValue, touched }) => (
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
                  {errors.name && touched.name ? (
                    <div style={{ color: 'red' }}>{errors.name}</div>
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description">Descripción</FormLabel>
                  <Field
                    id="description"
                    name="description"
                    as={Input}
                    variant="filled"
                  />
                  {errors.description && touched.description ? (
                    <div style={{ color: 'red' }}>{errors.description}</div>
                  ) : null}
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
                  {errors.endDate && touched.endDate ? (
                    <div style={{ color: 'red' }}>
                      {'La fecha de fin no puede ser anterior a la de inicio'}
                    </div>
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="travelers">Viajeros</FormLabel>
                  <Field
                    id="travelers"
                    name="travelers"
                    as={Input}
                    variant="filled"
                  />
                  {errors.travelers && touched.travelers ? (
                    <div style={{ color: 'red' }}>{errors.travelers}</div>
                  ) : null}
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
                    {errors.budget && touched.budget ? (
                      <div style={{ color: 'red' }}>{errors.budget}</div>
                    ) : null}
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
                  <Input
                    type="file"
                    id="imageUrl"
                    name="imageUrl"
                    as={Input}
                    variant="filled"
                    onChange={(event: any) => {
                      const file = event.target.files[0]
                      const reader = new FileReader()
                      reader.readAsDataURL(file)
                      reader.onload = () => {
                        setFieldValue('imageUrl', reader.result as string)
                      }
                    }}
                  />
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
