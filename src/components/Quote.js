import { FaTumblr, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import QuoteBody from './QuoteBody';
import colors from '../data/colors';
import './Quote.css';

const API_URL = 'https://api.quotable.io/random';

function Quote() {
  const [inProp, setInProp] = useState(false);
  const [quoteData, setQuoteData] = useState({});
  const [color, setColor] = useState('#eee');
  const [isLoading, setIsLoading] = useState(true);

  const displayColor = () => {
    const color = Math.floor(Math.random() * colors.length);
    return colors[color];
  };

  function newQuote() {
    setInProp(false);
    setIsLoading(true);
    (async function () {
      try {
        const res = await fetch(API_URL);
        const quote = await res.json();

        setColor(displayColor());
        setInProp(true);
        setIsLoading(false);
        setTimeout(setQuoteData(quote), 1000);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  useEffect(newQuote, []);

  document.body.style.backgroundColor = color;
  document.body.style.color = color;

  return (
    <div id="quote-box">
      <CSSTransition in={inProp} timeout={500} classNames="fade">
        <QuoteBody {...quoteData} />
      </CSSTransition>

      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          style={{ backgroundColor: color }}
        >
          <FaTwitter />
        </a>
        <a
          className="button"
          id="tumblr-quote"
          style={{ backgroundColor: color }}
        >
          <FaTumblr />
        </a>
        <button
          className="button"
          id="new-quote"
          onClick={newQuote}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
