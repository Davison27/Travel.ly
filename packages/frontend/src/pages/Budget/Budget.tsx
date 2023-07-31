/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Budget.scss'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Button,
  Card,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
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
  const totalExpenses =
    budget?.expenses.accomodationPrice! +
    budget?.expenses.entertainmentPrice! +
    budget?.expenses.foodPrice! +
    budget?.expenses.transportPrice!
  const travelerSpent = totalExpenses / budget?.travelers!

  const spent = () => {
    if (budget?.expenses.budget === 0) {
      return (
        <div className="messageGrid">
          <div>Has gastado {totalExpenses} €</div>
          <div>No has puesto un presupuesto 😅</div>
        </div>
      )
    } else {
      if (totalExpenses > budget?.expenses.budget!) {
        return (
          <div className="messageGrid">
            <div>Has gastado {totalExpenses} €</div>
            <div>
              Has superado el presupuesto en{' '}
              {totalExpenses - budget?.expenses.budget!} € 😥
            </div>
          </div>
        )
      }
      if (totalExpenses < budget?.expenses.budget!) {
        return (
          <div className="messageGrid">
            <div>Has gastado {totalExpenses} €</div>
            <div>Te quedan {budget?.expenses.budget! - totalExpenses} € 😄</div>
          </div>
        )
      }
      if (totalExpenses === budget?.expenses.budget!) {
        return (
          <div className="messageGrid">
            <div>Has gastado {totalExpenses} €</div>
            <div>Has gastado todo el presupuesto 😅</div>
          </div>
        )
      }
    }
  }

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
            {budget?.expenses.accomodationPrice} €
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
            {totalExpenses} €
          </Heading>
        </Stack>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <Stack mt="3" spacing="1">
          <Heading size="md" className="messageGrid">
            {spent()}
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
          <div className="ActivitiesTitle">Contabilidad de "{title}"</div>
        </div>
        <div className="sharedButton">
          <Popover placement="left-start">
            <PopoverTrigger>
              <Button>Dividir entre {budget?.travelers} viajeros</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <div>Cada viajero deberá de pagar un total de:</div>
                <div className="popover">{travelerSpent} €</div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
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
      <div className="budgetWrapper">
        <SimpleGrid
          className="travelsGrid"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(400px, 1rem))"
        >
          {budgetData}
        </SimpleGrid>
        <div className="image">
          <img alt="congrats" src="../../assets/images/congrats.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Budget
