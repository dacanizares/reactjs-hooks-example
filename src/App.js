import React, { Component } from 'react';
import './App.css';
import UsersComponent from './components/UsersComponent';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <UsersComponent />
      </div>
    );
  }
}

export default App;
