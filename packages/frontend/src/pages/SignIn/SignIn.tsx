import './SignIn.scss'

import OauthGoogle from '../../assets/images/btn_google_signin_light_normal_web@2x.png'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/NavBar/Navbar'

function SignIn() {
  return (
    <>
      <Navbar />
      <div className="logo">
        <Logo />
        <div id="description">Organice your travels and have fun</div>
      </div>
      <div className="oauth">
        <div style={{ fontSize: '2rem', paddingBottom: '0.7rem' }}>Sign In</div>
        <img src={OauthGoogle} alt="OauthGoogle" id="oauth-Google"></img>
      </div>
    </>
  )
}

export default SignIn
