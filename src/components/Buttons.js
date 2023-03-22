import { FaTwitter, FaTumblr } from 'react-icons/fa';
import './Buttons.css';

function Buttons({ onClick }) {
  return (
    <div className="buttons">
      <a className="button" id="tweet-quote">
        <FaTwitter />
      </a>
      <a className="button" id="tumblr-quote">
        <FaTumblr />
      </a>
      <button className="button" id="new-quote" onClick={onClick}>
        New Quote
      </button>
    </div>
  );
}

export default Buttons;
