import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Button, Icon, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { data } from '../../Data/Static-Data'

function Budget() {
  const BudgetData = data.find(
    (travel) => travel.id === '7c26e870-caa7-48db-bffb-445d8fb3e577',
  )!

  const title = BudgetData?.name
  const startDate = BudgetData?.startDate
  const endDate = BudgetData?.endDate

  const travelsData = BudgetData?.expenses?.map((budget: any) => (
    <>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={ChevronLeftIcon} color="green.500" />
          {budget.accomodationPrice}
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronLeftIcon} color="green.500" />
          {budget.entertainmentPrice}
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronLeftIcon} color="green.500" />
          {budget.foodPrice}
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={ChevronLeftIcon} color="green.500" />
          {budget.transportPrice}
        </ListItem>
      </List>
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
          <div className="ActivitiesTitle">{title}</div>
          <div className="ActivitiesDate">
            [{startDate} - {endDate}]
          </div>
        </div>
      </div>
      {travelsData}
    </div>
  )
}

export default Budget
