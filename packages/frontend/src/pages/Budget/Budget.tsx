/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Budget.scss'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  Divider,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import api from '../../utils/api/api'
import { Travel } from '../../utils/interfaces/Travel'

function Budget() {
  const [budget, setBudget] = useState<Travel>()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    api.getTravel(id!).then((response) => setBudget(response))
  }, [id])

  const navigate = useNavigate()

  const title = budget?.name

  const spentData = (
    <>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            🚗 Transporte 🚗 
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget?.expenses.transportPrice} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            🏠  Alojamiento 🏠 
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget?.expenses.accomodatePrice} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            ⚽  Ocio ⚽ 
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget?.expenses.entertainmentPrice} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            🍩  Comida 🍩 
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget?.expenses.foodPrice} €
          </Heading>
        </Stack>
      </Card>
    </>
  )

  const budgetData = (
    <>
      {' '}
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            Presupuesto
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget?.expenses.budget} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            Gastado
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget?.expenses.accomodatePrice} +
            {budget?.expenses.entertainmentPrice} + {budget?.expenses.foodPrice}
            + +{budget?.expenses.transportPrice} €
          </Heading>
        </Stack>
      </Card>
    </>
  )

  return (
    <div>
      <div className="titleButton">
        <div className="backButton">
          <Button onClick={() => navigate(-1)}>
            <Icon as={ChevronLeftIcon} boxSize={5} />
            <div style={{ paddingLeft: '0.7rem' }}>Volver</div>
          </Button>
        </div>
        <div>
          <div className="ActivitiesTitle">Presupuesto de "{title}"</div>
        </div>
        <div className="sharedButton">
          <Button>
            <div>Dividir entre viajeros</div>
          </Button>
        </div>
      </div>
      <div className="budgetWrapper">
        <SimpleGrid
          className="travelsGrid"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 1rem))"
        >
          {spentData}
        </SimpleGrid>
      </div>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="10" color="black">
          Total gastado
        </AbsoluteCenter>
      </Box>
      <div className="budgetWrapper">
        <SimpleGrid
          className="travelsGrid"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 1rem))"
        >
          {budgetData}
        </SimpleGrid>
      </div>
    </div>
  )
}

export default Budget
