import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import LikeButton from './like_button.js';
import Products from './Products.js';

class App extends Component {
  render() {
    return (
    	
      <div className="App">
        <header className="App-header">
       
  
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p className="App-intro">
          Hi {this.props.SomeName}

          </p>

         
          <Clock></Clock>

          <div className="Curso">
          <Products />
          </div>

          <div className="Like">
          <LikeButton />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React for nummies
          </a>

        </header>
      </div>

    );
  }
}

export default App;
