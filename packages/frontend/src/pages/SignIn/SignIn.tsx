/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-bind */
import './SignIn.scss'

import { GoogleLogin } from '@react-oauth/google'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import { storage } from '../../utils/functions/storage'

function SignIn() {
  const navigate = useNavigate()
  const response = (credentialResponse: any) => {
    storage.set('token', credentialResponse.credential!)
    navigate('/travels')
  }

  const error = () => {
    console.log('Login Failed, please try again with another account')
  }

  return (
    <>
      <div className="logo">
        <Logo />
        <div id="description">Organice your travels and have fun</div>
        <GoogleLogin onSuccess={response} onError={error} />
      </div>
    </>
  )
}

export default SignIn
