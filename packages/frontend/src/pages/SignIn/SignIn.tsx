import SignInImage from '../../assets/images/signIn_image.jpg';
import OauthGoogle from '../../assets/oauth_images/btn_google_signin_light_normal_web@2x.png'
import './SignIn.scss';
import Logo from '../../components/Logo/logo';

function SignIn() {
  return (
    <>
      <div className="wrapper">
        <div className='image-wrapper'>
            <img src={SignInImage} alt="SignIn" className="image"></img>
            <div id="black-background" />
        </div>
      </div>
      <div className='logo'>
      <Logo/>
      </div>
      <div className='Oauth'>
        <div style={{paddingBottom:"0.7rem", fontSize:"2rem"}}>
            Sign In
        </div>
        <img src={OauthGoogle} alt="OauthGoogle" id='Oauth-Google'></img>
      </div>
    </>
  );
}

export default SignIn;
