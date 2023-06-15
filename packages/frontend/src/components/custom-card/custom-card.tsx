import './custom-card.scss'

import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Img,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import CustomAlertDialog from '../custom-alert-dialog/custom-alert-dialog'
import Emoji from '../Emoji/emoji'

export default function CustomCard(props: any) {
  const travelsData = props.data.map((travel: any) => (
    <Card maxW="sm" backgroundColor={'#DCDCDC'}>
      <CardBody>
        <Img
          src={travel.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="messageGrid">
            {travel.message}
          </Heading>
          <Heading size="md" className="messageGrid">
            {travel.startDate} - {travel.endDate}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter className="buttonGrid">
        <ButtonGroup spacing="3">
          <Button leftIcon={<ViewIcon />} variant="outline" colorScheme="blue">
            View
          </Button>
          <Button leftIcon={<EditIcon />} variant="outline" colorScheme="green">
            Modify
          </Button>
          <CustomAlertDialog />
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))
  return (
    <div>
      <SimpleGrid
        className="travelsGrid"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1rem))"
      >
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Link to="/new-travel">
              <Button height="100%" width="100%" colorScheme="white">
                <div className="emojiSize">
                  <Emoji symbol="🛫" />
                </div>
              </Button>
            </Link>
          </CardBody>
          <CardFooter className="buttonGrid">
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Add new travel
              </Heading>
            </Stack>
          </CardFooter>
        </Card>
        {travelsData}
      </SimpleGrid>
    </div>
  )
}
