import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state ={
        isAnimOn1: false
      
    }
  }

  toggleMenu() {
    this.setState({
      isAnimOn1: !this.state.isAnimOn1
    })
  }

  render() {
    return (
      <div className="App">
      {/* this is everything inside the picture */}
      <div className='top-section'>
        {/* this is just nav bar */}
          <div className='nav'>
            <div className='nav-title'>
              Start Bootstrap
            </div>
            <ul className='menu-text'>
              <li className='list'>SERVICES </li>
              <li className='list'> PORTFOLIO </li>
              <li className='list'> ABOUT </li>
              <li className='list'> TEAM </li>
              <li className='list'> CONTACT</li>
            </ul>
              <button className='nav-btn' onClick={() => this.toggleMenu()}>Menu</button>
          {/* this is the menu that slides out */}
          </div>
          <ul className={ this.state.isAnimOn1 ? 'menu-text2 shown' : 'menu-text2 hidden'}>
              <li className='list2'>SERVICES </li>
              <li className='list2'> PORTFOLIO </li>
              <li className='list2'> ABOUT </li>
              <li className='list2'> TEAM </li>
              <li className='list2'> CONTACT</li>
            </ul>
        <div>
        </div>
        {/* This is the welcome/nice to meet you */}
        <div className='welcome'>
          <div className='welcome1'>
            Welcome To Our Studio!
          </div>
          <div className='welcome2'>
            IT'S NICE TO MEET YOU
          </div>
          <div className='welcome3'>
            <button className='button'>TELL ME MORE</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
