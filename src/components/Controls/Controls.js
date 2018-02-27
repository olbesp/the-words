import React from 'react';

import './Controls.css';

const controls = (props) => {

  return (
    <div className="Controls">
      <button onClick={props.getQuote}>Next</button>
      <a className="twitter-share-button" id="tweetBtn" href="" onClick={props.tweet}>Tweet It!</a>
    </div>
  );
}

export default controls;