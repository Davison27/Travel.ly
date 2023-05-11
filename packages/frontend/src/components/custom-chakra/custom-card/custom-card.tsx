import './custom-card.scss'

import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
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

import Emoji from '../../Emoji/emoji'
import CustomAlertDialog from '../custom-alert-dialog/custom-alert-dialog'

export default function CustomCard(props: any) {
  const eventData = props.data.map((event: any) => (
    <Card maxW="sm" backgroundColor={'#DCDCDC'}>
      <CardBody>
        <Img
          src={event.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" className="messageGrid">
            {event.message}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter className="buttonGrid">
        <ButtonGroup spacing="3">
          <Button leftIcon={<ViewIcon />} variant="outline" colorScheme="black">
            View
          </Button>
          <Button leftIcon={<EditIcon />} variant="outline" colorScheme="black">
            Modify
          </Button>
          <Button leftIcon={<DeleteIcon />} variant="outline" colorScheme="red">
            <CustomAlertDialog />
          </Button>
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
        {eventData}
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Button colorScheme="white" height="100%" width="100%">
              <div className="emojiSize">
                <Emoji symbol="🛫" />
              </div>
            </Button>
          </CardBody>
          <CardFooter className="buttonGrid">
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Add new travel
              </Heading>
            </Stack>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  )
}
