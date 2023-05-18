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

function TravelsForm() {
  const initialValues = {
    budget: 0,
    description: '',
    endDate: '',
    name: '',
    people: 1,
    startDate: '',
  }

  const handleSubmit = useCallback((values: unknown) => {
    console.log(values)
  }, [])

  return (
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
                <FormLabel htmlFor="people">People</FormLabel>
                <Field
                  id="people"
                  name="people"
                  as={Input}
                  variant="filled"
                ></Field>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="budget">Budget</FormLabel>
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
              <Button type="submit" colorScheme="blue" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default TravelsForm
