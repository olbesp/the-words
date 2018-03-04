import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Header from '../components/Header/Header';
import QuoteBox from '../components/QuoteBox/QuoteBox';
import Controls from '../components/Controls/Controls';
import Background from '../components/Background/Background';
import Loader from '../components/Loader/Loader';

const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

class App extends Component {
  state = {
    quote: null,
    author: null
  }

  getQuote = () => {
    axios.get(url)
    .then(response => {
      this.setState({
        quote: response.data[0].content,
        author: response.data[0].title
      });
    });
  }

  createQuote = () => {
    return { __html: this.state.quote };
  }

  createAuthor = () => {
    return { __html: this.state.author };
  }

  tweetQuote = () => {
    if (this.state.quote) {
      const quote = document.getElementById('quote').textContent;
      const author = document.getElementById('author').textContent;
      const twitterLink = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
      document.getElementById('tweetBtn').setAttribute('href', twitterLink);
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="App">
        <Background />
        <Header />
        {
          !this.state.quote ? 
          <Loader /> :
          <QuoteBox quote={this.createQuote()} author={this.createAuthor()} />
        }
        <Controls getQuote={this.getQuote} tweet={this.tweetQuote} />
      </div>
    );
  }
}

export default App;
