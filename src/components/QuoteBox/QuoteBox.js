import React from 'react';

import './QuoteBox.css';

const quoteBox = (props) => (
  <main className="QuoteBox">
    <div id="quote" dangerouslySetInnerHTML={props.quote}></div>
    <div id="author">{props.author}</div>
  </main>
);

export default quoteBox;