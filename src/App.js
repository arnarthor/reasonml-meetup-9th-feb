import React, {Component} from 'react';
import logo from './logo.svg';
import Speakers from './Speakers.bs.js';
import speakerList from './speakerList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Speakers speakers={speakerList} />
        </p>
      </div>
    );
  }
}

export default App;
