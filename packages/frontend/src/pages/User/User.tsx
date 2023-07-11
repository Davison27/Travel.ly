import './User.scss'

import {
  Avatar,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

import { userData } from '../../Data/user-data'

function User() {
  const user = userData.map((data: any) => (
    <div className="wrapper">
      <Avatar size="2xl" name="Segun Adebayo" src={data.img} />
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="☺️ Nombre" />
          <Input type="tel" placeholder={data.name} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="☺️ Apellidos" />
          <Input type="tel" placeholder={data.lastName} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Ubicación" />
          <Input type="tel" placeholder={data.ubication} />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Correo" />
          <Input type="tel" placeholder={data.email} />
        </InputGroup>
      </Stack>
    </div>
  ))

  return <>{user}</>
}

export default User
