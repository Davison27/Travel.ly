/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-bind */
import './SignIn.scss'

import { GoogleLogin } from '@react-oauth/google'
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
      <div className="claseDelDiv">
        <div className="signInWrapper">
          <div className="logo">
            <Logo />
            <div id="description">Organice your travels and have fun</div>
            <div className="googleLogin">
              <GoogleLogin onSuccess={response} onError={error} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
