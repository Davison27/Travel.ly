import Emoji from '../Emoji/emoji';
import './logo.scss';

function Logo() {
  return (
    <div id="Title">
      <div id="Name">
        Travel.ly
        <Emoji symbol="✈️" />
      </div>
    </div>
  );
}

export default Logo;
