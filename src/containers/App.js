import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Header from '../components/Header/Header';
import QuoteBox from '../components/QuoteBox/QuoteBox';

const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='

class App extends Component {
  state = {
    quoteHTML: null,
    author: null
  }

  getQuote = () => {
    axios.get(url)
    .then(response => {
      const quoteHTML = response.data[0].content;
      const author = response.data[0].title;
      this.setState({
        quoteHTML,
        author
      });
    });
  }

  createQuote = () => {
    return { __html: this.state.quoteHTML };
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <QuoteBox quote={this.createQuote()} author={this.state.author} />
      </div>
    );
  }
}

export default App;
