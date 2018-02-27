import React from 'react';

import './QuoteBox.css';

const quoteBox = (props) => (
  <main className="QuoteBox">
    <div dangerouslySetInnerHTML={props.quote}></div>
    <div>{props.author}</div>
  </main>
);

export default quoteBox;