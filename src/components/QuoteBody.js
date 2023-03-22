import { FaQuoteLeft } from 'react-icons/fa';

function QuoteBody({ content, author }) {
  return (
    <div>
      <div className="quote-text">
        <FaQuoteLeft className="icon" />
        <span id="text">{content}</span>
      </div>
      <div className="quote-author">
        <span id="author">- {author}</span>
      </div>
    </div>
  );
}

export default QuoteBody;
