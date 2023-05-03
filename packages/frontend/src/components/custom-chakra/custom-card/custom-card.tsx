import './custom-card.scss'

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

function CustomCard() {
  return (
    <SimpleGrid
      className="travelsGrid"
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(400px, 1rem))"
    >
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <CardBody>
          <Img
            src={require('../../../assets/images/madrid_image.jpg')}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Viajecito a Madrid</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              Ver
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Modificar
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Eliminar
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <CardBody>
          <Img
            src={require('../../../assets/images/paris_image.jpg')}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">A París que nos vamos!</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              Ver
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Modificar
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Eliminar
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <CardBody>
          <Img
            src={require('../../../assets/images/paris_image.jpg')}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">A París que nos vamos!</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              Ver
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Modificar
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Eliminar
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm" backgroundColor={'#DCDCDC'}>
        <CardBody>
          <Img
            src={require('../../../assets/images/paris_image.jpg')}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">A París que nos vamos!</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              Ver
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Modificar
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Eliminar
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </SimpleGrid>
  )
}

export default CustomCard
