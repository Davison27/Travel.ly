/* eslint-disable react/jsx-no-bind */
import './SignIn.scss'

import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'

import Logo from '../../components/Logo/Logo'

function SignIn() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: 'id',
        scope: '',
      })
    }

    gapi.load('client:auth2', start)
  }, [])

  const onSuccess = (res: any) => {
    console.log('[Login Success] currentUser:', res.profileObj)
  }

  const onFailure = (res: any) => {
    console.log('[Login failed] res:', res)
  }

  return (
    <>
      <div className="logo">
        <Logo />
        <div id="description">Organice your travels and have fun</div>
      </div>
      <div className="oauth">
        <div style={{ fontSize: '2rem', paddingBottom: '0.7rem' }}>Sign In</div>
        <GoogleLogin
          clientId={'id'}
          buttonText="Acceder"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <GoogleLogout clientId={'id'} buttonText="Logout" />
      </div>
    </>
  )
}

export default SignIn
