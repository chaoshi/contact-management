import React, { Component } from 'react';
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddContact />
        <ContactList />
      </div>
    );
  }
}

export default App;
