import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:"one",
      Profile:{title:"web...?"}
    }
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Profile title={this.state.Profile.title}></Profile>
        <ProfileEdit></ProfileEdit>
      </div>
    );
  }
}

export default App;
