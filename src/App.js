import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import './App.css';

import BookList from './containers/BookList';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>Book List</Header>
        <BookList />
      </Container>
    );
  }
}

export default App;
