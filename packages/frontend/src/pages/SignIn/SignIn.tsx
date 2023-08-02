/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-bind */
import './SignIn.scss'

import { GoogleLogin, googleLogout } from '@react-oauth/google'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

import Logo from '../../components/Logo/Logo'

function SignIn() {
  const response = (credentialResponse: any) => {
    const decoded = jwt_decode(credentialResponse.credential!)
    console.log(decoded)
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
        <button onClick={() => googleLogout()}>LogOut</button>
      </div>
    </>
  )
}

export default SignIn
