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
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { userData } from '../../Data/user-data'

function User() {
  const navigate = useNavigate()
  const user = userData.map((data: any) => (
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
          <Avatar size="2xl" name="Segun Adebayo" src={data.img} />
        </div>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="😀 Nombre" />
            <Input type="tel" placeholder={data.name} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="😀 Apellidos" />
            <Input type="tel" placeholder={data.lastName} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="📍Ubicación" />
            <Input type="tel" placeholder={data.ubication} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="📧 Correo" />
            <Input type="tel" placeholder={data.email} />
          </InputGroup>
        </Stack>
        <Button colorScheme="red" size="sm">
          Cerrar Sesión
        </Button>
      </div>
    </>
  ))

  return <>{user}</>
}

export default User
