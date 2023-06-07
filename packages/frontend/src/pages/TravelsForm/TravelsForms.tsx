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

import api from '../../utils/api/api'

interface Values {
  description: string
  endDate: string
  expenses: number
  id: string
  name: string
  shared: boolean
  startDate: string
  travelers: number
}

function TravelsForm() {
  const initialValues: Values = {
    description: '',
    endDate: '',
    expenses: 0,
    id: '',
    name: '',
    shared: false,
    startDate: '',
    travelers: 1,
  }

  const handleSubmit = useCallback(async (values: Values) => {
    try {
      await api.postTravel(
        values.description,
        values.endDate,
        values.expenses,
        values.id,
        values.name,
        values.shared,
        values.startDate,
        values.travelers,
      )
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div className="travelsTitle">Your new travel</div>
      <Box bg="white" p={6} h={800} rounded="md">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">New Travel</FormLabel>
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
                  <FormLabel htmlFor="startDate">Start Date</FormLabel>
                  <Field
                    id="startDate"
                    name="startDate"
                    as={Input}
                    type="datetime-local"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="endDate">End Date</FormLabel>
                  <Field
                    id="endDate"
                    name="endDate"
                    as={Input}
                    type="datetime-local"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="travelers">Travelers</FormLabel>
                  <Field
                    id="travelers"
                    name="travelers"
                    as={Input}
                    variant="filled"
                  ></Field>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="expense">expense</FormLabel>
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
                <Button type="submit" colorScheme="blue" width="full">
                  Submit
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
