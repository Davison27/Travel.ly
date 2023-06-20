import './custom-timeline-card.scss'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import CustomModal from '../custom-modal/custom-modal'
import Emoji from '../Emoji/emoji'

export default function CustomTimelineCard(props: any) {
  const travelsData = props.data.map((travel: any) => (
    <button>
      <Image
        src={travel.image}
        alt="Green double couch with wooden legs"
        borderRadius="xl"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md" className="messageGrid">
          {travel.message}
        </Heading>
        <Heading size="md" className="messageGrid">
          {travel.startDate} - {travel.endDate}
        </Heading>
      </Stack>
      <CustomModal activities={travel.activities} />
    </button>
  ))
  return (
    <div>
      <SimpleGrid
        className="activitiesGrid"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1rem))"
      >
        {travelsData}
        <Card maxW="sm" backgroundColor={'#DCDCDC'}>
          <CardBody>
            <Link to="/new-travel">
              <Button height="100%" width="100%" colorScheme="white">
                <div className="emojiSize">
                  <Emoji symbol="🧭" />
                </div>
              </Button>
            </Link>
          </CardBody>
          <CardFooter className="buttonGrid">
            <Stack mt="6" spacing="3">
              <Heading size="md" className="messageGrid">
                Add new activity
              </Heading>
            </Stack>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  )
}
