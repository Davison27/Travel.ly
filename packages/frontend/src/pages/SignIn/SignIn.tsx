import OauthGoogle from '../../assets/images/btn_google_signin_light_normal_web@2x.png';
import './SignIn.scss';
import Logo from '../../components/Logo/logo';

function SignIn() {
  return (
    <>
      <div className="logo">
        <Logo />
        <div id="description">Organice your travels and have fun</div>
      </div>
      <div className="oauth">
        <div style={{ paddingBottom: '0.7rem', fontSize: '2rem' }}>Sign In</div>
        <img src={OauthGoogle} alt="OauthGoogle" id="oauth-Google"></img>
      </div>
    </>
  );
}

export default SignIn;
