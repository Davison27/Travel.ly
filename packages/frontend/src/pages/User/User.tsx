import './User.scss'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react'
import { googleLogout } from '@react-oauth/google'
import { TokenPayload } from 'google-auth-library'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'

import { storage } from '../../utils/functions/storage'

const logOut = () => {
  googleLogout()
  storage.remove('token')
}

function User() {
  const navigate = useNavigate()
  const data: TokenPayload = jwt_decode(storage.get('token'))
  const user = (
    <>
      {' '}
      <div className="backButton">
        <Button onClick={() => navigate(-1)}>
          <Icon as={ChevronLeftIcon} boxSize={5} />
          <div style={{ paddingLeft: '0.7rem' }}>Volver</div>
        </Button>
      </div>
      <div className="wrapper">
        <div className="avatarImage">
          <Avatar size="2xl" name="Segun Adebayo" src={data.picture} />
        </div>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="😀 Nombre" />
            <Input type="tel" value={data.given_name} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="😀 Apellidos" />
            <Input type="tel" value={data.family_name} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="📍Ubicación" />
            <Input type="tel" value={data.locale} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="📧 Correo" />
            <Input type="tel" value={data.email} />
          </InputGroup>
        </Stack>
        <Link to="/">
          <Button colorScheme="red" size="sm" onClick={() => logOut()}>
            Cerrar Sesión
          </Button>
        </Link>
      </div>
    </>
  )

  return <>{user}</>
}

export default User
