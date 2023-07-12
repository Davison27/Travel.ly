import './User.scss'

import {
  Avatar,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

import { userData } from '../../Data/user-data'

function User() {
  const user = userData.map((data: any) => (
    <div className="wrapper">
      <div className="avatarImage">
        <Avatar size="2xl" name="Segun Adebayo" src={data.img} />
      </div>
      <Button colorScheme="gray" size="sm">
        Cambiar foto
      </Button>
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
      <Button colorScheme="blue" size="sm">
        Guardar
      </Button>
      <Button colorScheme="red" size="sm">
        Eliminar cuenta
      </Button>
    </div>
  ))

  return <>{user}</>
}

export default User
