import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import TextEdit from './components/TextEdit';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <Profile title={this.state.Profile.title}></Profile>
        <ProfileEdit></ProfileEdit>
        <TextEdit></TextEdit>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
