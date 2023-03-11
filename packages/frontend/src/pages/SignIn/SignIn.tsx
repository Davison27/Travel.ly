import SignInImage from '../../assets/images/signIn_image.jpg';
import OauthGoogle from '../../assets/oauth_images/btn_google_signin_light_normal_web@2x.png'
import './SignIn.scss';
import Emoji from '../../components/emoji';
import { relative } from 'path';

function SignIn() {
  return (
    <>
      {/* <img src={SignInImage} className="image"></img> */}
      <div className="wrapper">
        <div className='image-wrapper'>
            <img src={SignInImage} alt="SignIn" className="image"></img>
            <div id="black-background" />
        </div>
      </div>
      <div className="Title">
        <div id="Name">
          Travel.ly
          <Emoji symbol="✈️" />
        </div>
        <div>Organice your travels and have fun</div>
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
