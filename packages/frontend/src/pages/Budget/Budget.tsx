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
import { Link } from 'react-router-dom'

import { data } from '../../Data/Static-Data'

function Budget() {
  const BudgetData = data.find(
    (travel) => travel.id === '7c26e870-caa7-48db-bffb-445d8fb3e577',
  )!

  const title = BudgetData?.name
  const totalExpenses = BudgetData?.expenses?.map(
    (spent) =>
      spent.transportPrice +
      spent.accomodationPrice +
      spent.entertainmentPrice +
      spent.foodPrice,
  )

  const spentData = BudgetData?.expenses?.map((spent) => (
    <>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            🚗 Transporte 🚗 
          </Heading>
          <Heading size="md" className="messageGrid">
            {spent.transportPrice} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            🏠  Alojamiento 🏠 
          </Heading>
          <Heading size="md" className="messageGrid">
            {spent.accomodationPrice} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            ⚽  Ocio ⚽ 
          </Heading>
          <Heading size="md" className="messageGrid">
            {spent.entertainmentPrice} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            🍩  Comida 🍩 
          </Heading>
          <Heading size="md" className="messageGrid">
            {spent.foodPrice} €
          </Heading>
        </Stack>
      </Card>
    </>
  ))

  const budgetData = BudgetData?.expenses?.map((budget) => (
    <>
      {' '}
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            Presupuesto
          </Heading>
          <Heading size="md" className="messageGrid">
            {budget.budget} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            Gastado
          </Heading>
          <Heading size="md" className="messageGrid">
            {totalExpenses} €
          </Heading>
        </Stack>
      </Card>
    </>
  ))

  return (
    <div>
      <div className="titleButton">
        <div className="backButton">
          <Link to="/activities">
            <Button>
              <Icon as={ChevronLeftIcon} boxSize={5} />
              <div style={{ paddingLeft: '0.7rem' }}>Volver</div>
            </Button>
          </Link>
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
